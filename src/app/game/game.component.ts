import { Component, OnInit  } from '@angular/core';
import Phaser from 'phaser';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit  {

  phaserGame?: Phaser.Game;

  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ MainScene ],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      }
    };
  }
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }

}

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  create() {
    console.log('create method');
    this.add.image(0, 0, 'gradient');
    const settingsButton = this.add.image(200, 400,
      'button').setInteractive();
    const settingsButtonText = this.add.text(0, 0, 'Settings', { color:
     '#000', fontSize: '28px' });
    Phaser.Display.Align.In.Center(settingsButtonText,
     settingsButton);
    settingsButton.on('pointerdown', () => {
        settingsButton.setTexture('button_pressed');
        this.sound.play('buttonSound');
    }).on('pointerup', () => {
        settingsButton.setTexture('button');
    });

    const music = this.sound.add('backgroundMusic', {
      mute: false,
      volume: 0.1,
      rate: 1,
      loop: true,
      delay: 200
    });
    // music.play();

  }
  preload() {
    localStorage
    console.log('preload method');
    this.load.image('gradient', '../../assets/gradient.png');
    this.load.image('button', '../../assets/green_button02.png');
    this.load.image('button_pressed',
        '../../assets/green_button03.png');
    this.load.audio('buttonSound', '../../assets/switch33.wav');
    this.load.audio('backgroundMusic', '../../assets/Alexander Ehlers - Twists.mp3');

  }
  override update() {

  }
}
