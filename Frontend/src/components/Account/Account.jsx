import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function AccountTransaction({ title, amount, description, id }) {
   return (
      <>
         <section className="account">
            <div className="account-content-wrapper">
               <h3 className="account-title">{title}</h3>
               <p className="account-amount">{amount}</p>
               <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
               <Link key={`account-${id}`} to={`/accounts/${id}`}>
                  <button className="transaction-button">
                     View transactions
                  </button>
               </Link>
            </div>
         </section>
      </>
   )
}

AccountTransaction.propType = {
   title: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
}

export default AccountTransaction
