import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  posts = [
    {
      name: "Jonathan Walters",
      position: "Lead Software Engineer",
      title: "Recognizing Effort",
      message: "“ Recognizing the hard work and effort of every team member. Your dedication and determination are the driving force behind our success. Let's continue to strive for excellence! 💪 #TeamEffort #Recognition ”",
      image: "/assets/image-jonathan.jpg"
    },
    {
      name: "Daniel Clifford",
      position: "Senior Software Engineer",
      title: "Gratitude for Support",
      message: "“ Expressing my heartfelt gratitude to each team member for their unwavering support. Your dedication and encouragement keep us going. Thank you for being an amazing team! 🙌 #Grateful #TeamSupport ”",
      image: "/assets/image-daniel.jpg"
    },
    {
      name: "Kira Whittle",
      position: "Lead QA Engineer",
      title: "Celebrating Achievements",
      message: "“ Cheers to our team's incredible achievements! Each member has contributed their best, and the results speak for themselves. Let's keep soaring higher! 🎉 #TeamGoals #Success ”",
      image: "/assets/image-kira.jpg"
    },
    {
      name: "Jeanette Harmon",
      position: "Principal Software Engineer",
      title: "Positive Vibes",
      message: "“ Bringing in the positivity! Our team radiates great energy and a can-do spirit. Thank you all for being such a positive force. Let's spread the positivity further! ✨ #PositiveVibes #TeamSpirit ”",
      image: "/assets/image-jeanette.jpg"
    }
  ];

}
