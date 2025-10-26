import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <dialog class="dialog-backdrop" [open]="isConfirmationOpen">
      <div class="dialog-content">
        Are you sure you want to perform this action?

        <button (click)="isConfirmationOpen = false">Cancel</button>
        <button (click)="delete()" class="delete-button">Confirm</button>
      </div>
    </dialog>
  `,
  styles: [`
    .dialog-backdrop {
      border: none;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.5);
      align-items: center;
      justify-content: center;
    }
    .dialog-content {
      background: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  `],
  standalone: true,
})
export class ConfirmationDialogComponent {
  isConfirmationOpen = true;

  delete = () => {
    this.isConfirmationOpen = false;
  }
}