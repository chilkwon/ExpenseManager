import { Component, OnInit } from '@angular/core';
import { DebugService } from '../debug.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  constructor(private debugService : DebugService) { }

  ngOnInit() {
    this.debugService.info("Debug compoenet gets service from parent")
  }

}
