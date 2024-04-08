import { Component, OnInit } from '@angular/core';
import { Consts, ProtocolScreen } from '../../../constants';
import { ApiService } from '../../common/services/api.service';
import { Router } from '@angular/router';
import { ProtocolsService } from '../protocols/protocols.service';

@Component( {
    selector: 'canano-my-favorites',
    templateUrl: './my-favorites.component.html',
    styleUrls: ['./my-favorites.component.scss']
} )
export class MyFavoritesComponent implements OnInit{
    errors = {};
    helpUrl = Consts.HELP_URL_FAVORITE;
    toolHeadingNameSearchSample = 'My Favorites';
    showSampleFavs = true;
    showProtocolsFavs = true;
    showPublicationsFavs = true;
    favSamples = [];
    favProtocols = [];
    favPublications = [];
    protocolScreen = ProtocolScreen;
    protocolScreenToShow = ProtocolScreen.PROTOCOL_SEARCH_INPUT_SCREEN;

    constructor( private apiService: ApiService, private router: Router,
                 private protocolsService: ProtocolsService ){

    }

    ngOnInit(): void{
        this.apiService.doGet( Consts.QUERY_GET_FAVORITE, '' ).subscribe(
            data => {
                this.errors = {};
                this.favSamples = <any>data['samples'];
                this.favProtocols = <any>data['protocols'];
                this.favPublications = <any>data['publications'];
            },

            ( err ) => {
                this.errors = err;
                console.error( 'ERROR QUERY_GET_FAVORITE: ', err );
            } );

    }

    deleteProtocolFromFavorites( favToDelete ){
        this.apiService.doPost( Consts.QUERY_DELETE_FAVORITE, favToDelete ).subscribe(
            data => {
                this.errors = {};
                this.favSamples = <any>data['samples'];
                this.favProtocols = <any>data['protocols'];
                this.favPublications = <any>data['publications'];
            },
            err => {
                this.errors = err;
                console.log( 'ERROR deleteSampleFromFavorites: ', err );
            }
        );
    }

    deletePublicationFromFavorites( favToDelete ){
        this.apiService.doPost( Consts.QUERY_DELETE_FAVORITE, favToDelete ).subscribe(
            data => {
                this.errors = {};
                this.favSamples = <any>data['samples'];
                this.favProtocols = <any>data['protocols'];
                this.favPublications = <any>data['publications'];
            },
            err => {
                this.errors = err;
                console.error( 'ERROR deleteSampleFromFavorites: ', err );

            }
        );
    }

    deleteSampleFromFavorites( favToDelete ){
        this.apiService.doPost( Consts.QUERY_DELETE_FAVORITE, favToDelete ).subscribe(
            data => {
                this.errors = {};
                this.favSamples = <any>data['samples'];
                this.favProtocols = <any>data['protocols'];
                this.favPublications = <any>data['publications'];

            },
            err => {
                this.errors = err;
                console.log( 'ERROR deleteSampleFromFavorites: ', err );
            }
        );
    }

    navigateToSampleEdit( sampleId ){
        this.router.navigate( ['home/samples/sample', sampleId] );  // @FIXME  Don't hard code these
    }

    navigateToSampleView( sampleId ){
        this.router.navigate( ['home/samples/view-sample', sampleId] );  // @FIXME  Don't hard code these
    }

    navigateToProtocolView( protocolId ) {
        // this.protocolsService.setCurrentProtocolScreen( ProtocolScreen.PROTOCOL_VIEW_SCREEN, protocolId );
        this.router.navigate( ['home/protocols/view-protocol', protocolId] );  // @FIXME  Don't hard code these
    }

    navigateToProtocolEdit( protocolId ){
        this.protocolsService.setCurrentProtocolScreen( ProtocolScreen.PROTOCOL_EDIT_SCREEN, protocolId );
        this.router.navigate( ['home/protocols/edit-protocol', protocolId] );  // @FIXME  Don't hard code these
    }


    navigateToPublicationEdit( publicationId ){
        this.router.navigate( ['home/samples/publications/publication', publicationId] );  // @FIXME  Don't hard code these
    }

}
