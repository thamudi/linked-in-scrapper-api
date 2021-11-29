class Search {
  constructor(payload) {
    this.query = payload.query ? [...payload.query.split(',')] : null;
    this.type = payload.type ? [...payload.type.split(',')] : null;
    this.locations = payload.locations ? [...payload.locations.split(',')] : null;
    this.limit = payload.limit ? Number(payload.limit) : null;
  }
}

module.exports = Search;