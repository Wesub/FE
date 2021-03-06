import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-team-roster',
  template: `
      <div class="item" *ngFor="let member of team">
        <img class="ui avatar image" src="{{ member.avatar }}">
        <div class="content">
          <a class="header">{{ member.name }}</a>
            <h6 class="ui header mini">{{ member.email }}
                <div class="description">
                    <p><a href="https://www.linkedin.com/in/{{ member.linkedin }}" target="_blank"><i class="icon linkedin square blue"></i> {{ member.message }}</a></p>
                </div>
            </h6>
            <br>
        </div>
      </div>
  `,
  styleUrls: ['./team-roster.component.scss']
})
export class TeamRosterComponent implements OnInit {
    @HostBinding('attr.class') contClass = 'ui massive relaxed middle aligned animated list';
    team: Object[];

  constructor() {
      // Below populates the information for the team component, just edit/add/delete members as JS objects in this array.
      this.team = [
          {name: 'Benjamin', avatar: '../assets/images/avatars/benjamin.png', email: 'email@email.com', message: 'Show some personality here.', linkedin: 'benjamin-rej-notlev-5844618a'},
          {name:'Nikol', avatar: '../assets/images/avatars/nikol.png', email: 'email@email.com', message: 'Show some personality here.', linkedin: 'nikol-murtingerová-83261891'},
          {name:'Stephen', avatar: '../assets/images/avatars/stephen.png', email: 'stephen@codehammer.design', message: 'Developer.', linkedin: 'chiangs'}
      ]
  }

  ngOnInit() {
  }

}
