import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-button-loginout',
  templateUrl: './button-loginout.component.html',
  styleUrls: ['./button-loginout.component.css']
})
export class ButtonLoginoutComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }
}