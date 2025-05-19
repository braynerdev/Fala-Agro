export interface Eventos {
  id: number;
  nome: string;
  dataTime: Date;
  local: string;
  imagem: string;
  imagemBanner: string;
  imagemCartaz?: string;
  linkIngresso?: string;

  descricao?: string;      
  programacao?: string;    
  dias?: string;            
  estrutura?: string[];     
  setores?: string[];       
  endereco?: string;        
  linkMapa?: string;        
}
