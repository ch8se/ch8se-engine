var React = require('react');
var ReactDOM = require('react-dom');
var xlsx = require('xlsx-browserify-shim');
var services = require('../utils/services');

/*
 * Code importer script
 * Loads a excel document supported by: https://www.npmjs.com/package/xlsx
 * Reads first row to get column names and expects: Code, Trees, Water, Food; columns. With 1st capital letter
 */




var Importer = React.createClass({
  getInitialState: function() {
    return {
      sheetData: []
    }
  },
  render: function() {
    var sheets = this.state.sheetData.map((item, key) => {
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{item.Code}</td>
          <td>{item.Trees}</td>
          <td>{item.Water}</td>
          <td>{item.Food}</td>
          <td>{item.status}</td>
        </tr>
      );
    });

    return (
      <div className="importer">
        <input type="file" onChange={this.handleNewFile} />
        {this.state.sheetData.length ? (<button onClick={this.processSheets}>Start processing codes</button>) : null}
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>Code</td>
              <td>Trees</td>
              <td>Water</td>
              <td>Food</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {sheets}
          </tbody>
        </table>
      </div>
    );
  },

  processSheets: function(e) {
    var that = this;

    var sheetData = that.state.sheetData

    function checkStatus(key) {
      var code = sheetData[key].Code;

      services.search({
        endpoint: 'code-api',
        val: code,
        callback: (data) => {
          if (data.length) {
            var hasTitle = false;
            for (var i = data.length - 1; i >= 0; i--) {
              if (data[i].title.rendered === code) {
                sheetData[key].status = 'Duplicate';
                that.setState({sheetData: sheetData});
                hasTitle = true;
                break;
              }
            }

            if (!hasTitle) {
              createCode(sheetData[key], key);
            } else {
              checkStatus(key + 1);
            }

          } else {
            createCode(sheetData[key], key);
          }
        }
      });
    }

    checkStatus(0);


    function createCode(data, key) {
      services.put({
        endpoint: 'code-api',
        data: {
          title: data.Code,
          trees: data.Trees,
          water: data.Water,
          food: data.Food,
          status: 'publish'
        },
        callback: (cData) => {
          data.status = 'Saved';
          that.setState({sheetData: sheetData});
          checkStatus(key + 1);
        },
        error: (error) => {
          data.status = 'Error';
          that.setState({sheetData: sheetData});
          checkStatus(key + 1);
        }
      })
    }

  },
  handleNewFile: function(e) {
    var files = e.target.files;
    var that = this;

    var reader = new FileReader();
    var name = files[0].name;
    reader.onload = function(e) {
      var data = e.target.result;
 
      var workbook = xlsx.read(data, {type: 'binary'});
      var sheets = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

      sheets.map((item) => {
        var newItem = item;
        newItem.status = 'not processed';
        return newItem;
      });

      that.setState({sheetData: sheets});
     };
    reader.readAsBinaryString(files[0]);
  }
});




var CodeImporter = {
  init: function() {
    ReactDOM.render(<Importer />, this);
  }
}

module.exports = CodeImporter;