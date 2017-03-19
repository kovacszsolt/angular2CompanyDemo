import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
@Pipe({name: 'capitalize2'})
export class CapitalizePipe2 implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer) {
    }

    transform(value: string, args: string): SafeHtml {
        return (this._sanitizer.bypassSecurityTrustHtml(value.replace(args, '<span style="background-color: red">' + args + '</span>')));

    }
}

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, args: string): string {
        return value.replace(args, '<span class="bg-primary">' + args + '</span>');

    }
}