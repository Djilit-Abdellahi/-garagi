// src/app/core/models/route-types.ts

import { Route } from '@angular/router';

export interface RoleRoute extends Route {
  data?: {
    roles: string[];
  };
}
