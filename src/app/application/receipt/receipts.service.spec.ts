import { TestBed, inject } from '@angular/core/testing'

import { ReceiptsService } from './receipts.service'
import { ConfigService } from '../config/config.service'

describe('ReceiptsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReceiptsService,
        ConfigService,
      ]
    })
  })

  it('should ...', inject([ReceiptsService], (service: ReceiptsService) => {
    expect(service).toBeTruthy()
  }))
})
