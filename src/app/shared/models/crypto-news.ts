export interface CryptoNewsApiResponse {
  Data: CryptoNews[];
  HasWarning: Boolean;
  Message: String;
  Promoted: [];
  RateLimit: {};
  Type: Number;
}

export interface CryptoNews {
  body: String;
  categories: String;
  downvotes: String;
  guid: String;
  id: String;
  imageurl: String;
  published_on: Number;
  source: String;
  source_info: {
    img: String;
    language: 'EN' | 'PT';
    name: String;
  };
  tags: String;
  title: String;
  upvotes: String;
  url: String;
}
