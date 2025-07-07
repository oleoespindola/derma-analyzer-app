# Derma Analyzer

Derma Analyzer é um sistema open source de **análise de imagens de pele usando inteligência artificial.**
Ele detecta possíveis lesões, prevê riscos e gera um histórico de análises para ajudar profissionais da saúde, pesquisadores ou qualquer pessoa interessada em monitorar a pele de forma prática e inteligente.

## Funcionalidades

📷 Detecção de lesões: envia imagens de pele para identificar sinais suspeitos.

⚠️ Previsão de risco: estima a probabilidade de uma lesão ser de risco.

🗂️ Histórico pessoal: salva análises anteriores para acompanhamento.

🔐 Autenticação: controle de acesso para proteger dados sensíveis.

🚀 API pública: rota /predict disponível para testes.

## Tecnologias utilizadas

### Frontend

- ReactJS;
- TypeScript;
- Tailwind CSS;
- Vite;
- Axios;

### Backend

- O backend está [neste repositório](https://github.com/oleoespindola/derma-analyzer-api).
- Teste a API rodando [aqui](https://oleoespindola-derma-analyzer-api.hf.space).
  - A rota `/predict` é pública e pode ser utilizada para testes.

## Arquitetura

``` md
src/
 ├─ components/   # Componentes de interface (genéricos e específicos)
 ├─ guards/       # Funções de proteção de rotas (auth)
 ├─ services/     # Configuração de chamadas à API
 ├─ view/         # Páginas principais da aplicação
```

## 🤝  Contribuição

Quer contribuir? Bora!

1. Faça um fork
2. Crie uma branch: git checkout -b feature/sua-feature
3. Faça o commit: git commit -m 'feat: minha contribuição'
4. Envie o pull request

## Licença

Este projeto é licenciado sob a licença MIT.
