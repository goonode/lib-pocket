import { Component, OnInit } from '@angular/core';
import { PocketService, POCKET_GLOBAL } from 'projects/pocket/src/lib/pocket.service';

export const POCKET_GLOBAL_DATA_CONTAINER_KEY = 'POCKET_GLOBAL_DATA_CONTAINER_KEY';
export const POCKET_GLOBAL_DATA_CONTAINER_DUMMY_KEY = 'POCKET_GLOBAL_DATA_CONTAINER_DUMMY_KEY';
export const POCKET_GLOBAL_DATA_CONTAINER_A_RECEIVER = 'POCKET_GLOBAL_DATA_CONTAINER_A_RECEIVER';
export const POCKET_GLOBAL_DATA_CONTAINER_B_RECEIVER = 'POCKET_GLOBAL_DATA_CONTAINER_B_RECEIVER';

@Component( {
  selector: 'lpd-pocket-data-container',
  templateUrl: './pocket-data-container.component.html',
  styleUrls: [ './pocket-data-container.component.scss' ]
} )
export class PocketDataContainerComponent implements OnInit {

  constructor( private pocket: PocketService ) {
    this.pocket.register( POCKET_GLOBAL );
    this.pocket.next( POCKET_GLOBAL, { [ POCKET_GLOBAL_DATA_CONTAINER_DUMMY_KEY ]: 'testing' }, null, true );
  }

  ngOnInit(): void { }

}
