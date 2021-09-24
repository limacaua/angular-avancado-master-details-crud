import { InMemoryDbService } from "angular-in-memory-web-api";

import { category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories = [
      { id: 1, name: 'Moradia', description: 'pagamentos de contas da casa' },
      { id: 1, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 1, name: 'Salário', description: 'Recebimento de Salário' },
      { id: 1, name: 'Freelas', description: 'Trabalhamos como freelancer' }
    ];

    return { categories }
  }
}
