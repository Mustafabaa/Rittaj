interface ModuleConfig {
    id: string;
    name: string;
    dependencies: string[];
    apis: string[];
}

class ModuleManager {
    private modules: Map<string, ModuleConfig>;
    
    constructor() {
        this.modules = new Map();
        this.initializeModules();
    }

    private initializeModules() {
        // Initialize core modules
        this.registerModule({
            id: 'omt',
            name: 'Money Transfer',
            dependencies: ['auth', 'payment'],
            apis: ['/api/v1/transfers', '/api/v1/rates']
        });
        
        this.registerModule({
            id: 'travel',
            name: 'Travel Services',
            dependencies: ['auth', 'booking'],
            apis: ['/api/v1/flights', '/api/v1/packages']
        });
        
        this.registerModule({
            id: 'internet',
            name: 'Internet Services',
            dependencies: ['auth', 'subscription'],
            apis: ['/api/v1/plans', '/api/v1/support']
        });
    }
}
