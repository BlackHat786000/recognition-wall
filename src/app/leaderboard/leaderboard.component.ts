import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  displayedColumns: string[] = ['position', 'name', 'score'];
  leaderboardData = [
    { position: 1, name: 'John', score: 100 },
    { position: 2, name: 'Alice', score: 85 },
    { position: 3, name: 'Bob', score: 70 }
    // Add more data as needed
  ];

}
