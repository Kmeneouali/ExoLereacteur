import React from "react";

export default function Panier(props) {
  return (
    <div className="card-panier">
      <div className="card-panier-box">
        <button className="card-panier-button">Valider mon panier</button>
        <div className="card-panier-items-list">
          <span data-id="1519055545-89">
            <i className="fa fa-minus styling" aria-hidden="true"></i>
          </span>
          <span className="card-panier-item-nbr">1</span>
          <span data-id="1519055545-89">
            <i className="fa fa-plus styling" aria-hidden="true"></i>
          </span>
          <span className="card-panier-item-title">Brunch vegan</span>
          <span className="card-panier-item-price">25€</span>
        </div>
        <div className="card-panier-total-section">
          <span className="card-panier-total-label">Sous-Total</span>
          <span className="card-panier-total-amount">25€</span>
        </div>
        <div className="card-panier-total-section total">
          <span className="card-panier-total-label">Frais de livraison</span>
          <span className="card-panier-total-amount">2.5€</span>
        </div>
        <div className="card-panier-total-section grand-total">
          <span className="card-panier-total-label total-final">Total</span>
          <span className="card-panier-total-amount total-final">28€</span>
        </div>
        <button className="sc-AykKC sc-AykKD ipkjHj">Vider le panier</button>
      </div>
    </div>
  );
}
