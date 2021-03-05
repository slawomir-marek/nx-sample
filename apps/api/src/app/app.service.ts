import { Injectable } from '@nestjs/common';
import { ListItem } from '@nx-sample/share';

@Injectable()
export class AppService {
  getData(): ListItem[] {
    return [
      { id: 1, name: 'Item 1', status: true },
      { id: 2, name: 'Item 2', status: false },
      { id: 3, name: 'Item 3', status: true }
    ];
  }
}