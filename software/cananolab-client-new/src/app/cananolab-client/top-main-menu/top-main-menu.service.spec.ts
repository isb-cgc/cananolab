import { TestBed } from '@angular/core/testing';

import { TopMainMenuService, TopMenuItems } from './top-main-menu.service';

describe('TopMainMenuService', () => {
  let service: TopMainMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopMainMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


    it( 'Test hideAllMenuItems', () => {
        service.init();
        service.hideAllMenuItems();
        expect( service.getVisibleMenuArray().length ).toBeGreaterThan(  0 );
        for( let item of service.getVisibleMenuArray()){
            expect( item).toBe( false )
        }
        expect( service.getEnableMenuArray().length ).toBeGreaterThan(  0 );
        for( let item of service.getEnableMenuArray()){
            expect( item).toBe( true )
        }
    } );


    // showOnlyMenuItems
    it( 'Test showOnlyMenuItems', () => {
        service.init();
        service.hideAllMenuItems();
        expect( service.getVisibleMenuArray().length ).toBeGreaterThan( 0 );
        for( let item of service.getVisibleMenuArray() ){
            expect( item ).toBe( false )
        }
        service.showOnlyMenuItems( [  Object.keys( TopMenuItems )[0], Object.keys( TopMenuItems )[2] ] );
        for( let f = 0; f < Object.keys( TopMenuItems ).length; f++ ){
            if( (f === 0) || (f === 2)){
                expect( service.getVisibleMenuArray()[f] === true );
            }else{
                expect( service.getVisibleMenuArray()[f] === false );
            }
        }
    });



    });


