/*
 * Services module, all services should use this for ajax calls
 */

var services = {


  /*
   * params - {Object} - should contain callback, error handle, endpoint and id
   */
  post: function(params) {
    jQuery.ajax({
      url: `${wpApiSettings.root}wp/v2/${params.endpoint}/${params.id}`,
      method: 'POST',
      beforeSend: function ( xhr ) {
        xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
      },
      data: params.data
    }).done((data) => {
      if (params.callback) params.callback(data);
    }).error(error => {
      if (params.error) params.error(error);
    });
  },

  put: function(params) {
    jQuery.ajax({
      url: `${wpApiSettings.root}wp/v2/${params.endpoint}`,
      method: 'POST',
      beforeSend: function ( xhr ) {
        xhr.setRequestHeader( 'X-WP-Nonce', wpApiSettings.nonce );
      },
      data: params.data
    }).done((data) => {
      if (params.callback) params.callback(data);
    }).error(error => {
      if (params.error) params.error(error);
    });
  },


  search: function(params) {
    var url = `${wpApiSettings.root}wp/v2/${params.endpoint}/?filter[title]=${params.val}`

    jQuery.ajax({
      url: url,
      method: 'GET',
    }).done((data) => {
      if (params.callback) params.callback(data);
    }).error(error => {
      if (params.error) params.error(error);
    });
  }
}

module.exports = services;