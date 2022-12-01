import { EventEmitter, Injectable } from '@angular/core';


@Injectable( {
    providedIn: 'root'
} )
export class SampleSearchResultsService{

    searchResults;
    sortResults;
    sampleIds = [];
    searchResultsEmitter = new EventEmitter();
    sortResultsEmitter = new EventEmitter();

    constructor(){
    }

    setSearchResults( sr ){
        console.log('WJRL Do not set the item in local storage');
        localStorage.setItem('cananolab_sample_search_results', JSON.stringify(sr));
        this.searchResults = sr;
        this.searchResultsEmitter.emit( sr );
    }

    getSearchResults(){
        console.log('WJRL Do not parse from local storage, get the results!');
        let results = JSON.parse(localStorage.getItem('cananolab_sample_search_results'));
        if (results) {
            return results
        }
        return this.searchResults;
    }

    setSortResults( sor ){
        console.log('WJRL Here come my sort results');
        this.sortResults = sor;
        this.sortResultsEmitter.emit( sor );
    }

    getSortResults( sr ){
        console.log('WJRL somebody wants my sorted results');
        let results = JSON.parse(localStorage.getItem('cananolab_sample_search_results'));
        if (results) {
            return results
        }
        return this.searchResults;
    }



    getSampleIds() {
        this.sampleIds = [];
        let results = JSON.parse(localStorage.getItem('cananolab_sample_search_results'));
        if (results) {
            // do samples ids stuff
        }
        else {
            results=this.searchResults;
        }
        results.forEach(sample=> {
            this.sampleIds.push(sample.sampleId)
        })
        console.log(this.sampleIds)
        return this.sampleIds;
    }
}
