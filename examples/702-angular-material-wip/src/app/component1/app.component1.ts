import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import {FormControl, FormGroup} from "@angular/forms";
import {WikipediaService} from "../services/wikipedia.service";


// import just the operators we need, not import 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';


// define some constants
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY  = 'AIzaSyBdi3LXzf1xWXOAVgAwNkGvjnM1TwSV4VU';		// Please, use your own API_KEY in real applications! https://developers.google.com/youtube/v3/getting-started

// compose a url to search for, based on a query/keyword
const makeURL = (query: string) => `${BASE_URL}?q=${query}&part=snippet&key=${API_KEY}`;


@Component({
	selector   : 'component1',
	templateUrl: 'app.component1.html'
})
export class AppComponent1 implements OnInit {
	videos: Observable<any[]>;
	wikiResultsKeywords: string[];
	wikiResultsUrls: string[];
	wikiResults: any;


	// compose our form
	searchYouTube = new FormControl();
	searchWiki    = new FormControl();
	searchForm    = new FormGroup({
		searchYouTube: this.searchYouTube,
		searchWiki   : this.searchWiki
	});

	constructor(private http: Http, private wikipediaService: WikipediaService) {
	}

	ngOnInit() {
		// subscribe to Youtube input textbox and bind async (see html)
		this.videos = this.searchYouTube.valueChanges
			.debounceTime(600)						// wait for 600ms to hit the API
			.map(query => makeURL(query))			// turn keyword into a real youtube-URL
			.switchMap(url => this.http.get(url))	// wait for, and switch to the Observable that my http get call returns (more info on switchMap, for example https://egghead.io/lessons/rxjs-starting-a-stream-with-switchmap)
			.map((res: Response) => res.json())		// map its response to json
			.map(response => {
			    console.log(response);
			    return response.items
            });		// unwrap the response and return only the items array

		this.searchWiki.valueChanges
			.debounceTime(600)
			.switchMap(keyword => this.wikipediaService.search(keyword))
			.subscribe((response) => {
					console.log(response); // inspect response object to see why we pick response[1] and response[3]
					this.wikiResults         = response;
					this.wikiResultsKeywords = response[1];
					this.wikiResultsUrls     = response[3];
				}
			)
	}

}

