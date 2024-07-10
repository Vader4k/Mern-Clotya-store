import { Headtags } from '../components'

const Returns = () => {
  return (
    <div className='w-full max-w-[1300px] mx-auto px-3 py-10 lg:py-20 flex flex-col gap-6'>
      <Headtags pageTitle="Refund and Returns"/>
      <h3 className='text-[0.85rem] font-bold'>This is a sample page</h3>
      <h1 className='text-[1.5rem] md:text-[2rem] font-medium mt-2'>Overview</h1>
      <div className='flex flex-col gap-4'>
        <p>Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can{"'"}t offer you a full refund or exchange.</p>
        <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
        <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>
        <p>Additional non-returnable items:</p>
        <ul className='px-6 list-disc'>
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>some health and personal care items</li>
        </ul>
        <p>To complete your return, we require a receipt or proof of purchase.</p>
        <p>Please do not send your purchase back to the manufacturer.</p>
        <p>There are certain situations where only partial refunds are granted:</p>
        <ul className='px-6 list-disc'>
          <li>Book with obvious signs of use</li>
          <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.</li>
          <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
          <li>Any item that is returned more than 30 days after delivery</li>
        </ul>
      </div>
      <h1 className='text-[1.5rem] md:text-[2rem] font-medium mt-2'>Exchanges</h1>
      <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at email address and send your item to: physical address.</p>
      <h1 className='text-[1.5rem] md:text-[2rem] font-medium mt-2'>Gifts</h1>
      <p>If the item was marked as a gift when purchased and shipped directly to you, you{"'"}ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
      <p>If the item wasn{"'"}t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and they will find out about your return.</p>
      <h1 className='text-[1.5rem] md:text-[2rem] font-medium mt-2'>Shipping returns</h1>
      <p>To return your product, you should mail your product to: physical address.</p>
      <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
      <p>Depending on where you live, the time it may take for your exchanged product to reach you may vary.</p>
      <p>If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don{"'"}t guarantee that we will receive your returned item.</p>
      <h1 className='text-[1.5rem] md:text-[2rem] font-medium mt-2'>Need help?</h1>
      <p>Contact us at email for questions related to refunds and returns.</p>
    </div>
  )
}

export default Returns