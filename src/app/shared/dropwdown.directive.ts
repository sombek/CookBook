import {Directive, HostListener, ElementRef, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit {
    constructor(private elementRef:ElementRef,private renderer: Renderer2){}

    ngOnInit(){}
    private isOpen: boolean = false
    @HostListener('click')
    onClick(){
        if (!this.isOpen) {
            this.renderer.addClass(this.elementRef.nativeElement,'open')
            this.isOpen = !this.isOpen
        }else{
            this.renderer.removeClass(this.elementRef.nativeElement,'open')
            this.isOpen = !this.isOpen
        }
    }
}
