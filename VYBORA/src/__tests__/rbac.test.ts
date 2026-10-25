import {describe,it,expect} from 'vitest'; import {hasPermission} from '../utils/rbac';
describe('RBAC',()=>{it('gives super admins all permissions',()=>expect(hasPermission('Super Admin','settings.manage')).toBe(true));it('limits general users',()=>expect(hasPermission('General User','settings.manage')).toBe(false))});
