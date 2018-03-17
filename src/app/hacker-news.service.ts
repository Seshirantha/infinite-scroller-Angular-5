import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://127.0.0.1:8000';

@Injectable()
export class HackerNewsService {
  
  constructor(private http: Http,
  	private httpClient: HttpClient) { }

  getLatestStories(page: number = 1) {
  	/*const headers = new Headers();
  	let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRlZTQxODYzN2QxOTdlNWIyNjhkNTA0MTc1OGFmMzhjYTU5MzNkMmJmMGRlOGUxMTc2MDlmOTY4Mjc3Y2M2NzcxNjhiMzgxYTk5YjU1NTA0In0.eyJhdWQiOiIzIiwianRpIjoiNGVlNDE4NjM3ZDE5N2U1YjI2OGQ1MDQxNzU4YWYzOGNhNTkzM2QyYmYwZGU4ZTExNzYwOWY5NjgyNzdjYzY3NzE2OGIzODFhOTliNTU1MDQiLCJpYXQiOjE1MjA5MzYwNzUsIm5iZiI6MTUyMDkzNjA3NSwiZXhwIjoxNTUyNDcyMDc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Ibl13klkY4YxXx9mJEAm7Gw0eGheRXXsJRDxWk2yiS3qk-YT6SO3ejQPGhiCRICHZbcoc0WUEDwn3qsWz-0OkMY0JBTgSg-UHHEZwyyDnL0YgrD_Uf1YyXzm9Si1neQm6KgjY9fzCzwMOPArg5dJ-qSVuFPe2jyATsM5tzrqXuxSEzTgdypcsqisiHDzDWE8nC9nK8BKIVfeBdbtVHTZ6SLNf0RbnGNtbFBkPdDsKcpVKjBN0xtqWjNOeWxanQPx2IzOwTOP3YH3cIGUHwqj61zdrK7rpZKN0SCEvJAm5g_jmsyDBj7sf_Ag3c8TPrJHu-M2iKiyZP5i0dm8R9bFZ1FBbTuH9oZpVJGI9PJWfDWPSP7-2Yjstbgwpb7vevMcCxTHz63uep6FwvWB238Wo-w6c0DSPCZW6wLrRPVmi1AumzBBtdXfR9FsweRiXro6vl99UBpGwBj9W_pI-CLUC2yjhreVMltz7h3gncUzInBbC78sW7GHLxpGE9F0DAheCRVAun1m2p-wo5Bc-ez-K1NOloo1FxSMf0xZ3B8OWyVWvOXnNxwIqz6ug17UL6dkf_-_rbI_Tee8yx4BGDAa4dtcv84VI6iJI2CKmyBFhUyOntmazvkzOVIdlN5zcncqQUsN2X4kC_WoZjSCamjmGVBf2R7TkngLMtapw5yXHtw";
  	headers.set('authentication', token);
  	headers.set('Accept', 'application-json');
  	const options = new RequestOptions({headers:headers});*/
   /* return this.http.get(`${BASE_URL}/news?page=${page}`
    	,options);*/
    	
    	 return this.httpClient.get(`${BASE_URL}/api/users?page=${page}`
    	/*,options*/);
  }
}
