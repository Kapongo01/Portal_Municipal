import { NgClass, NgComponentOutlet, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: "Objavte nové obzory",
      description: "Cestovateľské zážitky, ktoré vám zmenia život",
      buttonText: "Rezervovať",
      buttonUrl: "#",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Prírodné krásy",
      description: "Nádherné výhľady a čistá príroda",
      buttonText: "Pozrieť ponuku",
      buttonUrl: "#",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Mestské dobrodružstvo",
      description: "Moderné mestá plné života a kultúry",
      buttonText: "Viac informácií",
      buttonUrl: "#",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  currentSlide = 0;
  autoplay = true;
  intervalId: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoplay() {
    this.intervalId = setInterval(() => {
      if (this.autoplay) {
        this.next();
      }
    }, 5000);
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number) {
    this.currentSlide = index;
  }

  replaceBrokenImage(event: Event) {
    const fallbackImages = [
      'https://picsum.photos/id/1018/1920/1080',
      'https://picsum.photos/id/1015/1920/1080',
      'https://picsum.photos/id/1019/1920/1080'
    ];
    const img = event.target as HTMLImageElement;
    img.src = fallbackImages[this.currentSlide % fallbackImages.length];
  }
}

