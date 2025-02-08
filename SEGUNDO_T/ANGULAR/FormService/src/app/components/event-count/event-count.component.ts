import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-event-count',
  templateUrl: './event-count.component.html',
  styleUrls: ['./event-count.component.css']
})
export class EventCountComponent implements OnInit {
  counts: { log: number, warn: number, error: number } = { log: 0, warn: 0, error: 0 };

  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.counts = this.loggerService.getCounts();
  }
}