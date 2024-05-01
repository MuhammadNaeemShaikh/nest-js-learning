import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './interface/customer.interface';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  public async getCustomers(): Promise<Customer[]> {
    const getCustomers = await this.customerModel.find();
    return getCustomers;
  }

  public async getCustomer(id: string): Promise<Customer> {
    return await this.customerModel.findById(id);
  }

  public async addCustomer(data: Customer): Promise<Customer> {
    const {
      firstName,
      lastName,
      email,
      address,
      created_at,
      description,
      phone,
    } = data;

    return await this.customerModel.create({
      firstName,
      lastName,
      email,
      address,
      created_at,
      description,
      phone,
    });
  }
}
