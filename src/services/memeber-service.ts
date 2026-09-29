import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberModel } from '../Models/MemberModel';

@Injectable({
  providedIn: 'root',//injectable dans toute la route 
})
//le decorateur qui declare que le service accepte d etre injecter dans un composant ou un autre service 
export class MemeberService {
  constructor(private http: HttpClient) { }
  
  //les fonctions du service qui generent des requetes http vers le backend pour recuperer les membres de la base de données
  getAllMembers() {
    // Implémentation pour récupérer tous les membres
    return this.http.get<MemberModel[]>('http://localhost:3000/members');
  }

  addMember(member: MemberModel) {
    // Implémentation pour ajouter un membre
    return this.http.post<void>('http://localhost:3000/members', member);
  }

  deleteMember(id: String) {
    // Implémentation pour supprimer un membre
    return this.http.delete<void>(`http://localhost:3000/members/${id}`);
  }
  getMemberById(id: String) {
    // Implémentation pour récupérer un membre par son ID
    return this.http.get<MemberModel>(`http://localhost:3000/members/${id}`);
  }
  updateMember(id: String, member: MemberModel) {
    // Implémentation pour mettre à jour un membre
    return this.http.put<void>(`http://localhost:3000/members/${id}`, member);
  }
  updateMember2(id: String, newName: String) {
    return this.http.patch<void>(`http://localhost:3000/members/${id}`, { name: newName });
  }

}