import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from '../../services/pagination/pagination.service';

@Component({
  selector: 'nal-jal-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  /**
   * !!!! Understand completely the logic and working of this PaginationComponent
   * before using it. Don't create a mess by using this component without understanding.
   * For detailed explanation contact Nitish !!!!
   * 
   * ####### DO NOT CHANGE ANYTHING IN THIS COMPONENT'S CODE ###########
   */


  //variables to pagination related required information
  items;
  pager : any = {};
  pageSize : number = 10;
  currentPage : number = 1;

  //variables exposed to user of this component
  //via template variables
  public pagedItems : any = []; // this array holds items as per paged selected
  public currentPageCounter : number = this.pageSize * this.currentPage; // this variable holds current page counter to provide serial numbers

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
  }

  /**
   * Function which will be called by Angular 
   * when setting items attribute on this components
   * selector
   */
  @Input("items")
  set setItems(items : any[]){
    //console.log("setItems called with items " + items.length);
    this.items = items;
    this.setPage(1);
  }

  /**
   * Function which will be called by Angular 
   * when setting pageSize attribute on this components
   * selector
   */
  @Input("pageSize")
  set setPageSize(pageSize : number){
    //console.log("setPageSize called with size " + pageSize);
    this.pageSize = pageSize;
  }

  /**
   * Set and manage pagination to display the NSC Staging Status
   * @param page 
   */
  setPage(page: number) {
    console.log("setPage called for " + page);
    if (page < 1) {
        return;
    }

    // Get pager object from service
    this.pager = this.paginationService.getPager(this.items.length, page, this.pageSize);

    //setting currentPage for component users
    this.currentPage = this.pager.currentPage;

    this.updateCurrentPageCounter();

    //setting pagedItems from original items
    //to be used by component user.
    this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  private updateCurrentPageCounter(){
    this.currentPageCounter = (this.currentPage * this.pageSize) - this.pageSize;
  }
}
