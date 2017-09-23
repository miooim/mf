import angular from 'angular';

class ContentService {
  constructor($http) {
    this.$http = $http;
  }

  getContent () {
    return this.$http.get('http://localhost:5090/api/contents');
  }

  updateContent (data) {
    return this.$http.put('http://localhost:5090/api/contents', {content: data});
  }
}

export default ContentService;