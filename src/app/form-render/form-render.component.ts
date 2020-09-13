import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {FormioComponent} from 'angular-formio';
import * as formJson from './formschema.json';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss']
})
export class FormRenderComponent implements OnInit {

  form: any;
  data = {};
  rendered = false;
  currentForm: any;
  @ViewChild('frmBuilder') frmBuilder?: any;
  refreshForm: any;
  @ViewChild(FormioComponent) formioComponent: FormioComponent;

  ngOnInit() {
    this.form = (formJson as any).default;

    this.refreshForm = new EventEmitter();
  }

  onReady(event) {
    console.log('Form ready!');
    this.currentForm = event.formio;
  }

  onRendered() {
    console.log('Form rendered!');
    this.rendered = true;
  }

  onChange(event) {
    console.log('Submission changed!', event);
    if (event.data) {
      this.data = event.data;
    }
  }

  onSubmit(event) {
    console.log(this.frmBuilder);

    this.formioComponent.formio.disabled = true;

    console.log(this.frmBuilder);

    console.log('form submitted!')
  }

}
