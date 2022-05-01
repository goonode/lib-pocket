import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PocketService, POCKET_GLOBAL } from 'projects/pocket/src/lib/pocket.service';
import { Subject } from 'rxjs';
import { POCKET_GLOBAL_DATA_CONTAINER_A_RECEIVER, POCKET_GLOBAL_DATA_CONTAINER_B_RECEIVER, POCKET_GLOBAL_DATA_CONTAINER_KEY } from '../pocket-data-container/pocket-data-container.component';

@Component( {
  selector: 'lpd-pocket-data-a',
  templateUrl: './pocket-data-a.component.html',
  styleUrls: [ './pocket-data-a.component.scss' ]
} )
export class PocketDataAComponent implements OnInit, OnDestroy {

  public tForm: FormGroup;

  private unsub: Subject<any> = new Subject();

  constructor( private pocket: PocketService ) {
    this.pocket.register( POCKET_GLOBAL );

    this.tForm = new FormGroup( {
      va: new FormControl( null, [] ),
      vb: new FormControl( null, [] ),
    } );

    this.tForm.valueChanges.subscribe( v => {
      this.pocket.next( POCKET_GLOBAL, {
        [ POCKET_GLOBAL_DATA_CONTAINER_KEY ]: { va: v.va, vb: v.vb, }
      }, { receiver: POCKET_GLOBAL_DATA_CONTAINER_A_RECEIVER }, true )
    } );

    // observe the pocket changes from the B component
    this.pocket.observeUntil( POCKET_GLOBAL, this.unsub,
      { receiver: POCKET_GLOBAL_DATA_CONTAINER_B_RECEIVER, subscriberID: 'B-DATA-SUBSCRIBER' } ).subscribe( ( v ) => {
        if ( this.pocket.isKeyChanged( v, POCKET_GLOBAL_DATA_CONTAINER_KEY, 'va' ) ) {
          const data = this.pocket.val( v, POCKET_GLOBAL_DATA_CONTAINER_KEY ) || {};
          this.tForm.controls.va.patchValue( data[ 'va' ], { emitEvent: false } );
        }

        if ( this.pocket.isKeyChanged( v, POCKET_GLOBAL_DATA_CONTAINER_KEY, 'vb' ) ) {
          const data = this.pocket.val( v, POCKET_GLOBAL_DATA_CONTAINER_KEY ) || {};
          this.tForm.controls.vb.patchValue( data[ 'vb' ], { emitEvent: false } );
        }
      } );
  }

  ngOnDestroy(): void {
    this.unsub.next( null );
    this.unsub.complete();
  }

  ngOnInit(): void {
  }

}
