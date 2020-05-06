
interface IRequest {
    method: string;
    uri: string;
    version: string;
    message: string;
  }

  class HttpRequest implements IRequest {
    public response: undefined;
    public fullfilled: boolean;
  
    constructor(
      public method: string,
      public uri: string,
      public version: string,
      public message: string,
    ) {
      this.response = undefined;
      this.fullfilled = false;
    }
  }

  export default HttpRequest;