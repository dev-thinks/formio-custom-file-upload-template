﻿export class FormTemplate {
  public static get File(): string {
    return `
{% if (!ctx.self.imageUpload) { %}
  <ul class="list-group list-group-striped">
    <li class="list-group-item list-group-header hidden-xs hidden-sm bg-info text-light">
      <div class="row">
      <div class="col-md-1"><strong>{{ctx.t('#')}}</strong></div>
        <div class="col-md-{% if (ctx.self.hasTypes) { %}3{% } else { %}5{% } %}"><strong>{{ctx.t('File Name')}}</strong></div>
        <div class="col-md-2"><strong>{{ctx.t('Mime Type')}}</strong></div>
        <div class="col-md-2"><strong>{{ctx.t('File Size')}}</strong></div>
        {% if (ctx.self.hasTypes) { %}
          <div class="col-md-2"><strong>{{ctx.t('Type')}}</strong></div>
        {% } %}
         {% if (!ctx.disabled) { %}
          <div class="col-md-2"><strong>{{ctx.t('Action')}}</strong></div>
        {% } %}
      </div>
    </li>

    {% ctx.files.forEach(function(file, index) { %}
      <li class="list-group-item {% if ((index+1)%2===0) { %} list-group-item-even {% } %}">
        <div class="row">
        <div class="col-md-1">{{index + 1}}</div>
          <div class="col-md-{% if (ctx.self.hasTypes) { %}3{% } else { %}5{% } %}">
            {{file.originalName || file.name}}
            {% if (!ctx.component.uploadOnly) { %}
              <a href="{{file.url || '#'}}" target="_blank" role="button" ref="fileLink">
                <i class="fa fa-arrow-circle-down text-success"></i>
              </a>
            {% } %}
          </div>
          <div class="col-md-2">{{file.type}}</div>
          <div class="col-md-2">{{ctx.fileSize(file.size)}}</div>
          {% if (ctx.self.hasTypes && !ctx.disabled) { %}
            <div class="col-md-2">
              <select class="file-type" ref="fileType">
                {% ctx.component.fileTypes.map(function(type) { %}
                  <option class="test" value="{{ type.value }}" {% if (type.label === file.fileType) { %}selected="selected"{% } %}>{{ type.label }}</option>
                {% }); %}
              </select>
            </div>
          {% } %}
          {% if (ctx.self.hasTypes && ctx.disabled) { %}
          <div class="col-md-2">{{file.fileType}}</div>
          {% } %}
           {% if (!ctx.disabled) { %}
            <div class="col-md-2"><span class="text-danger" role="button" ref="removeLink"><i class="{{ctx.iconClass('remove')}}"></i> Remove</span></div>
          {% } %}
        </div>
      </li>
    {% }) %}
  </ul>

{% } else { %}
  <div>
    {% ctx.files.forEach(function(file) { %}
      <div>
        <span>
          <img ref="fileImage" src="" alt="{{file.originalName || file.name}}" style="width:{{ctx.component.imageSize}}px">
          {% if (!ctx.disabled) { %}
            <i class="{{ctx.iconClass('remove')}}" ref="removeLink"></i>
          {% } %}
        </span>
      </div>
    {% }) %}
  </div>
{% } %}


{% if (!ctx.disabled && (ctx.component.multiple || !ctx.files.length)) { %}
  {% if (ctx.self.useWebViewCamera) { %}
    <div class="fileSelector">
      <button class="btn btn-primary" ref="galleryButton"><i class="fa fa-book"></i> {{ctx.t('Gallery')}}</button>
      <button class="btn btn-primary" ref="cameraButton"><i class="fa fa-camera"></i> {{ctx.t('Camera')}}</button>
    </div>
  {% } else if (!ctx.self.cameraMode) { %}
    <div class="fileSelector" ref="fileDrop">
      <i class="{{ctx.iconClass('cloud-upload')}} text-info"></i> {{ctx.t('Drop file(s) here to attach,')}}
        {% if (ctx.self.imageUpload) { %}
          <a href="#" ref="toggleCameraMode"><i class="fa fa-camera"></i> {{ctx.t('Use Camera,')}}</a>
        {% } %}
        {{ctx.t('or')}} <a href="#" ref="fileBrowse" class="btn btn-info browse"><i class="fa fa-plus"></i> {{ctx.t('Browse')}}</a>
    </div>
  {% } else { %}
    <div>
      <video class="video" autoplay="true" ref="videoPlayer"></video>
    </div>
    <button class="btn btn-primary" ref="takePictureButton"><i class="fa fa-camera"></i> {{ctx.t('Take Picture')}}</button>
    <button class="btn btn-primary" ref="toggleCameraMode">{{ctx.t('Switch to file upload')}}</button>
  {% } %}
{% } %}


{% ctx.statuses.forEach(function(status) { %}
  <div class="file {{ctx.statuses.status === 'error' ? ' has-error' : ''}}">
    <div class="row">
      <div class="fileName col-form-label col-sm-10">{{status.originalName}} <i class="{{ctx.iconClass('remove')}}" ref="fileStatusRemove"></i></div>
      <div class="fileSize col-form-label col-sm-2 text-right">{{ctx.fileSize(status.size)}}</div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        {% if (status.status === 'progress') { %}
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="{{status.progress}}" aria-valuemin="0" aria-valuemax="100" style="width: {{status.progress}}%">
              <span class="sr-only">{{status.progress}}% {{ctx.t('Complete')}}</span>
            </div>
          </div>
        {% } else if (status.status === 'error') { %}
          <div class="alert alert-danger bg-{{status.status}}">{{ctx.t(status.message)}}</div>
        {% } else { %}
          <div class="bg-{{status.status}}">{{ctx.t(status.message)}}</div>
        {% } %}
      </div>
    </div>
  </div>
{% }) %}


{% if (!ctx.component.storage || ctx.support.hasWarning) { %}
  <div class="alert alert-warning">
    {% if (!ctx.component.storage) { %}
      <p>{{ctx.t('No storage has been set for this field. File uploads are disabled until storage is set up.')}}</p>
    {% } %}
    {% if (!ctx.support.filereader) { %}
      <p>{{ctx.t('File API & FileReader API not supported.')}}</p>
    {% } %}
    {% if (!ctx.support.formdata) { %}
      <p>{{ctx.t("XHR2's FormData is not supported.")}}</p>
    {% } %}
    {% if (!ctx.support.progress) { %}
      <p>{{ctx.t("XHR2's upload progress isn't supported.")}}</p>
    {% } %}
  </div>
{% } %}`;
  }
}
