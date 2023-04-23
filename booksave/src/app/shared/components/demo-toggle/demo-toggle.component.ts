import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateManagementService } from '../../services/state-management.service';

@Component({
  selector: 'app-demo-toggle',
  templateUrl: './demo-toggle.component.html',
  styleUrls: ['./demo-toggle.component.scss']
})
export class DemoToggleComponent implements OnInit {

  modo = { isDemo: true, modo: 'demo' };

  constructor(private router: Router, private stateManagementService: StateManagementService) { }

  ngOnInit(): void {
  }

  changeModo(): void {
    this.modo.isDemo = !this.modo.isDemo;
    
    if (this.modo.isDemo) {
      this.modo.modo = 'demo';
      this.stateManagementService.isDemo$.next(true);
      this.router.navigateByUrl('/login-demo');
    } else {
      this.modo.modo = 'prod';
      this.stateManagementService.isDemo$.next(false);
      this.router.navigateByUrl('/login-prod');
    }
  }

}
