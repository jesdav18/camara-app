import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  ngOnInit(): void {
    this.mostrarReporte = false;
  }
  public webcamImage: any = null;
  private trigger: Subject<void> = new Subject<void>();


  mostrarReporte?:boolean;

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public handleInitError(error: WebcamInitError): void {
    console.error('Cannot initialize webcam', error);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public triggerSnapshot(): void {
    setTimeout(() => {
      this.trigger.next();
    }, 100);
  }
}
