import { NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  Inject,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpResquests } from '../../shared/request/request';
import { Subscription } from 'rxjs';
import { ServiceService } from '../../shared/services/service.service';

@Component({
  selector: 'app-new-service',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, FormsModule],
  templateUrl: './new-service.component.html',
  styleUrl: './new-service.component.css',
})
export class NewServiceComponent implements OnInit, AfterViewInit {
  private toast = inject(ToastrService);
  private http = inject(HttpResquests).request;
  private subscription: Subscription = new Subscription();

  formGroup!: FormGroup;

  isModalVisible: boolean = false;

  is_direct: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
  ) {
    this.formGroup = this.formBuilder.group({
      client: new FormControl('', [Validators.required]),
      business: new FormControl('', [Validators.required]),
      vehicle: new FormControl('', [Validators.required]),
      path: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      indications_service: new FormControl('', [Validators.required]),
      indications_driver: new FormControl('', [Validators.required]),
      pickup_date: new FormControl(''),
      range: new FormControl(''),
      direct_assigment: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.getFormChanges('direct_assigment', (value: any) => {
      this.is_direct = value;
    });
  }

  ngAfterViewInit(): void {}

  getFormChanges(control: string, fn: any) {
    const obs = this.formGroup.get(control);
    if (obs != null) {
      obs.valueChanges.subscribe({
        next: fn,
      });
    }
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.formGroup.patchValue({
      client: '',
      business: '',
      vehicle: '',
      path: '',
      date: '',
      indications_service: '',
      indications_driver: '',
    });
    this.isModalVisible = false;
  }

  submit() {
    if (!this.formGroup.valid) {
      this.toast.error('Formulario incompleto', '');
      return;
    }
    const data = this.formGroup.value;
    console.log(JSON.stringify(data));
    this.http(this.service.createNewService(data)).subscribe({
      next: (data) => {
        console.log(data);
        this.toast.success('Servicio creado satisfactoriamente', '');
      },
      error: (error) => {
        console.log(error);
        this.toast.error('Error creando el servicio', '');
      },
    });
  }
}
