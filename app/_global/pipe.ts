/**
 * Pipes for template
 */
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

/**
 * Search Highlight
 * with style turn off HTML safe
 */
@Pipe({name: 'searchhighlightstyle'})
export class SearchHighlightStyle implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer) {
    }

    transform(value: string, args: string): SafeHtml {
        return (this._sanitizer.bypassSecurityTrustHtml(value.replace(args, '<span style="background-color: red">' + args + '</span>')));

    }
}

/**
 * Search Hightlight
 * args: find string
 */
@Pipe({name: 'searchhighlight'})
export class SearchHighlight implements PipeTransform {
    transform(value: string, args: string): string {
        return value.replace(args, '<span class="bg-primary">' + args + '</span>');

    }
}