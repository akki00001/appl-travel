import React from 'react';
import SEO from '../components/common/SEO';
import '../assets/styles/pages/_termsandconditions.scss';

const TermsAndConditions = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions - Astir Passage"
        description="Read the terms and conditions for using Astir Passage services."
        keywords="terms, conditions, policies, Astir Passage"
      />
      {/* Hero Section */}
      <div
        className="terms-hero d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: 'url(/images/bg_3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      >
        <div className="terms-hero-text text-center p-4 bg-dark bg-opacity-50 rounded">
          <h1 className="display-4 fw-bold mb-2">Terms & Conditions</h1>
          <p className="lead mb-0">Last updated: April 16, 2025</p>
        </div>
      </div>

      {/* Terms Content Section */}
      <div className="terms-content container py-5">
        <h1>Terms and Conditions</h1>
        <p>Last updated: April 16, 2025</p>
        <p>
          These Terms and Conditions (“T&C”) set forth the legally binding framework between you (“User,” “You,” or “Your”) and <strong>Thrillophilia</strong> — referring collectively to <strong>Thrillophilia Travel Solutions Pvt Ltd,Astir Passage INC,Astir Passage FZCO, and 53 Take Off Private Limited</strong> —for:
        </p>
        <ul>
          <li>Accessing/usingAstir Passage’s website(s), mobile applications, or other sales channels (collectively, “Platform”).</li>
          <li>Booking any <strong>experiences, activities, accommodations, flights, visa assistance, or full tour packages</strong> throughAstir Passage.</li>
        </ul>
        <p>
          By using the Platform, creating an account, or making any Booking, You <strong>acknowledge</strong> that you have read, understood, and <strong>agreed</strong> to these T&C. If You do not agree, request you to please discontinue use of the Platform immediately.
        </p>

        <h2>1. Definitions</h2>
        <p>The following definitions apply throughout these T&C:</p>
        <ul>
          <li><strong>“User,” “You,” “Your”</strong>: Any person or entity visiting, accessing, registering on, or making a Booking through the Platform.</li>
          <li><strong>“Booking”</strong>: Any confirmed purchase or reservation for a single activity/experience or a complete tour package (comprising hotels, flights, visas, transfers, etc.).</li>
          <li><strong>“Supplier” or “Third-Party Supplier”</strong>: The entity actually providing the service, such as a hotel, airline, local activity operator, visa agency, or transport provider.</li>
          <li><strong>“Services”</strong>: All offerings booked throughAstir Passage, including but not limited to tours, hotels, flights, experiences, activities, visas, and associated logistics.</li>
          <li><strong>“Quotation”</strong>: A formal offer fromAstir Passage containing the service details (inclusions/exclusions), schedule, price, cancellation terms, and payment deadlines. Once the User pays in full, the Quotation and these T&C become the final contract, overriding any conflicting verbal, emails, whatsapp text, website statements or any other form of communication.</li>
          <li><strong>“Platform”</strong>:Astir Passage’s websites, apps, partner pages, social media accounts, and any affiliated channels or methods used for promotion, booking, or customer support.</li>
          <li><strong>“User Content”</strong>: Any text, images, reviews, feedback, videos, or other materials posted by the User on or through the Platform.</li>
          <li><strong>“Force Majeure”</strong>: Events or circumstances beyondAstir Passage’s control, including but not limited to natural disasters, pandemics, strikes, political unrest, etc., which prevent or delay the delivery of Services.</li>
        </ul>

        <h2>2. Application & Scope: Part A and Part B</h2>
        <p>To address all booking types, these T&C are split into two parts:</p>
        <p><strong>Part A – Direct Experience/Activity Bookings:</strong></p>
        <p>Covers scenarios where you book only a single experience or activity (e.g., a desert safari, a museum ticket, a guided city tour) via the Platform, with no additional add-ons like flights, hotels, or multiple services.</p>
        <p><strong>Part B – Complete Tour Packages:</strong></p>
        <p>Covers scenarios where You book a multi-service package (e.g., flights, hotels, multiple experiences, visa facilitation, transfers) as a bundled itinerary. This includes group tours, private tours, or custom itineraries.</p>
        <p>Sections addressing general policies (e.g., definitions, user conduct, disclaimers, etc.) apply to both Part A and Part B, unless otherwise specified.</p>

        <h2>3. Legal Agreement & Booking Contract</h2>
        <h3>Legal Standing</h3>
        <p>By usingAstir Passage, you confirm you are at least 18 years old and have the authority to enter a binding contract.</p>
        <p>If you book on behalf of someone else (e.g., a minor, a friend, or a family member), you are responsible for ensuring they understand and comply with these T&C.</p>
        <h3>Final Quotation is the Binding Contract</h3>
        <p>For Part B bookings (entire tours), the specific terms (payment schedule, inclusions, exclusions, cancellation policy) in the final Quotation — once partial/full payment made by you- become legally binding.</p>
        <p>Any verbal commitments or references to previous website content made during the discussion phase are not binding. Only the services explicitly listed in the final Quotation (QB) on which payment has been made by you will be considered as part of the final confirmed agreement.</p>
        <p>For Part A bookings (single activities), the relevant booking confirmation voucher and these T&C form the contract.</p>
        <h3>Role ofAstir Passage</h3>
        <p>Thrillophilia generally acts as an aggregator or facilitator; actual Services are provided by independent Suppliers (hotels, airlines, local tour operators, etc.).</p>
        <p>Your contract for the underlying Service is directly with the Supplier, though these T&C also govern how you interact withAstir Passage and use its Platform.</p>

        <h2>Part A: Direct Experience / Activity Bookings</h2>
        <p>This section applies if you are only booking a single activity or experience viaAstir Passage’s Platform—e.g., tickets to a theme park, a cooking class, a day trip.</p>

        <h3>1. Booking Process</h3>
        <p>You select the activity, date, and number of participants. The price displayed is typically per person.</p>
        <p>After you complete payment, You receive a Booking Confirmation (voucher or e-ticket). This confirms your spot with the Supplier.</p>
        <p>Please check the inclusions/exclusions. If it states “transfers included,” read carefully if it’s hotel pickup only, or from a meeting point, etc.</p>

        <h3>2. Supplier’s Right to Deny Service</h3>
        <p>If the Supplier has age/health restrictions (e.g., children below a certain age not allowed, or participants must be fit for a trek), you must comply.</p>
        <p>No refunds apply if the Supplier denies entry or participation due to your ineligibility, tardiness, or misconduct.</p>

        <h3>3. Cancellation & Refunds</h3>
        <p>Supplier Terms primarily govern whether the activity can be canceled, rescheduled, or refunded.Astir Passage will display these policies on the activity’s listing.</p>
        <p>If allowed, You must request cancellation via the Platform or email. A certain cancellation fee or deadlines may apply (e.g., “No refund if canceled within 48 hours of activity date”).</p>
        <p>If the Supplier cancels for reasons like weather or operational issues, we will offer either a refund or an alternative date (depending on the Supplier’s policy and service availability).</p>

        <h3>4. User Responsibilities</h3>
        <p>Arrive on time or earlier; late arrivals often cannot be accommodated or refunded.</p>
        <p>Check local laws or regulations (e.g., dress codes, restricted items etc).</p>
        <p>Provide accurate participant names, ages, contact details. Mistakes can cause denial of service.</p>
        <p>Users must thoroughly review the descriptions, inclusions, exclusions, and terms of all services and products before proceeding with a booking.</p>
        <p>It is the User’s responsibility to understand all conditions mentioned in the booking confirmation or as outlined in the confirmed booking voucher.</p>

        <h3>5. Assumption of Risk</h3>
        <p>Some activities (e.g., skydiving, scuba diving, desert safaris) carry inherent risks. By proceeding, you confirm you have assessed these risks, andAstir Passage disclaims liability for injuries or losses.</p>

        <h2>PART B: FULL TOUR PACKAGES (HOTELS, FLIGHTS, VISAS, ACTIVITIES)</h2>
        <p>This section supplements the general terms for Users booking multi-service itineraries or packages viaAstir Passage (which may involve flights, hotels, activities, visas, group tours, private tours, etc.).</p>

        <h3>B1. ROLE & RESPONSIBILITY OFAstir Passage</h3>
        <p><strong>Facilitator:</strong></p>
        <p>Thrillophilia does not own or operate any airline, hotel, transport vehicle, or local attraction. We act as a facilitator between You and multiple Suppliers.</p>
        <p>Thrillophilia is not responsible for operational decisions of third parties (e.g., flight cancellations, overbooked hotels, denied visa approvals).</p>
        <p><strong>Quotation and Contractual Terms:</strong></p>
        <p>You receive a Quotation listing daily itinerary, hotels, flights, visa assistance terms, inclusions/exclusions, and total cost.</p>
        <p>Once You pay in full (or as per the specified payment schedule) andAstir Passage confirms your booking, the Quotation’s terms are locked in as the final agreement.</p>
        <p>Any verbal commitments or references to previous website content made during the discussion phase are not binding. Only the services explicitly listed in the final Quotation (QB) on which payment has been made by you will be considered as part of the final confirmed agreement.</p>

        <h3>B2. BOOKING CONDITIONS & USER OBLIGATIONS</h3>
        <p><strong>Accuracy of Information:</strong></p>
        <p>You are responsible for providing accurate names, passports, ages, contact info, and any additional data (e.g., dietary needs, flight preferences).</p>
        <p>Inaccurate details can lead to flight or hotel booking errors, denial of boarding, or visa rejections. You shall bear the associated costs.</p>
        <p><strong>Payment Terms & Schedule:</strong></p>
        <p>The Quotation specifies the payment schedule (e.g., deposit, installment, or full payment by a certain date).</p>
        <p>If You fail to pay by the due date,Astir Passage reserves the right to cancelyour booking and apply cancellation charges as stated in the Quotation.</p>
        <p>Thrillophilia does not accept cash deposits; all payments must be made via recognized banking channels or secure payment gateways. Any cash deposit will be forfeited.</p>
        <p><strong>Final Confirmation:</strong></p>
        <p>Hotel or flight confirmations are only guaranteed upon receiving full payment (or the required deposit) by the stated deadline.</p>
        <p>If a flight or hotel is overbooked or operationally unavailable,Astir Passage will offer an alternative of similar category, subject to availability. Liability is limited to the amount already paid for that specific service.</p>
        <p><strong>Pre-Tour Information & Documents:</strong></p>
        <p>You are responsible for reviewing your final itinerary, flight tickets, hotel vouchers, and any special instructions (e.g., mandatory COVID tests, transit visas).</p>
        <p>Ensure compliance with check-in requirements, minimum group size, and local regulations.</p>
        <p><strong>Compliance with Local Laws:</strong></p>
        <p>You must adhere to visa regulations, entry requirements, customs rules, and laws of the countries visited.Astir Passage is not liable if You are denied entry for failing to meet immigration requirements.</p>

        <h3>B3. FLIGHTS POLICY</h3>
        <p><strong>Airline Terms:</strong></p>
        <p>Airline tickets are subject to each airline’s terms (including baggage allowance, cancellation, no-show rules).Astir Passage merely facilitates the ticket purchase.</p>
        <p>Airlines may reschedule, reroute, or cancel flights without prior notice.Astir Passage is not liable for direct or incidental losses (e.g., missed connections, extra hotel nights) caused by airline changes.</p>
        <p><strong>Flight Cancellations & Refunds:</strong></p>
        <p>If an airline cancels or delays a flight, refunds (if any) will follow that airline’s fare rules.</p>
        <p>If You cancel or partially use a ticket, You must notifyAstir Passage to initiate any applicable refunds or amendments (subject to airline policies, plus any service fee).</p>
        <p>Refunds will be processed onceAstir Passage receives the refunded amount from the airline. Any convenience fee or Tax Collected at Source (TCS) might be non-refundable.</p>
        <p><strong>Transit Visas & Boarding Denial:</strong></p>
        <p>You are solely responsible for obtaining transit visas if your itinerary includes layovers requiring a separate visa.Astir Passage cannot intervene if You are denied boarding due to missing transit permission.</p>
        <p>Thrillophilia shall not be liable if You miss your flight due to incomplete documents, late arrival at check-in, or legal/travel bans.</p>
        <p><strong>Web Check-In & Seat Selection:</strong></p>
        <p>Many airlines require web check-in to avoid airport delays.Astir Passage is not responsible for any seat/meal selection preferences or missed flights due to not completing web check-in.</p>

        <h3>B4. HOTEL & ACCOMMODATION POLICY</h3>
        <p><strong>No Ownership/Operation:</strong></p>
        <p>Thrillophilia does not own or manage hotels. All descriptions, images, or amenities are provided by the respective property.</p>
        <p>In rare cases of overbooking or unavailability,Astir Passage will try to arrange a similar alternative. Liability is limited to the value of the impacted booking.</p>
        <p><strong>Check-In Requirements:</strong></p>
        <p>Each hotel sets its own check-in/check-out times, deposit rules, ID policy (e.g., some may deny check-in to unmarried couples or local residents).</p>
        <p>No refund is provided if the hotel denies You for failing to meet their internal policy (e.g., minimum age, ID requirements).</p>
        <p>Any refundable security deposit collected at check-in is between You and the hotel.Astir Passage does not mediate or control deposit returns.</p>
        <p><strong>Mandatory Charges & Local Taxes:</strong></p>
        <p>Hotels may levy additional fees for festive meals, local city taxes, resort fees, etc. These are typically not included in the package price and must be settled directly by You at the property.</p>
        <p>Early check-in is at the hotel’s discretion depending upon availability and their internal policy and may also incur extra charges. Guaranteed early check-in often requires booking the room from the previous night.</p>
        <p>The booking amount covers only the stay and explicitly included services. Accommodation providers may impose mandatory charges for festive meals, extra services, or premium amenities, which must be settled directly by the User.Astir Passage does not control or waive these charges.</p>
        <p>In some countries, hotels collect a tourism tax or municipal tax as mandated by local law. This tax is to be paid directly by the User at the property and is not included in the travel package. Users are advised to check the applicable charges for their destination before travel.</p>
        <p>If the user leaves behind any belongings at the hotel, they must coordinate directly with the hotel for retrieval.Astir Passage is not responsible for this process.</p>

        <h3>B5. VISA POLICY</h3>
        <p><strong>Facilitation Only:</strong></p>
        <p>Thrillophilia facilitates visa applications (through third-party vendors or direct embassy coordination), but final issuance or rejection of a visa is solely at the embassy/consulate’s discretion.</p>
        <p>Incomplete, incorrect, or fraudulent documentation may lead to rejection;Astir Passage disclaims responsibility for such outcomes.</p>
        <p><strong>Processing Times & Fees:</strong></p>
        <p>Stated visa processing times are estimates only. Delays may occur due to embassy backlogs, holidays, or additional scrutiny.</p>
        <p>Visa fees, service charges, and other related costs are non-refundable even if the visa is refused, unless specified otherwise in the Quotation.</p>
        <p><strong>Travel Impact Due to Visa Rejection:</strong></p>
        <p>If your visa is denied or delayed, standard cancellation terms (in the Quotation) still apply for the overall package.</p>
        <p>Thrillophilia is not liable for any extra costs from the denial (e.g., new flight tickets, accommodation changes, partial refunds for missed departure).</p>
        <p><strong>Embassy Interviews:</strong></p>
        <p>Some embassies may require you to attend an in-person interview.Astir Passage will inform You of the proposed date, time, and requirements, but the final date will be confirmed only after Your approval.</p>
        <p>You may need to travel to a different city for the interview, depending on the embassy's location and availability. All costs related to the interview, including travel, accommodation, and other expenses, will be borne solely by You.Astir Passage holds no responsibility for these additional costs.</p>
        <p><strong>Passport Submission:</strong></p>
        <p>For visas requiring passport submission,Astir Passage uses Third-Party courier agencies for logistics and takes necessary precautions to ensure the safe delivery of the passport. However, it will not be held liable for any loss or damage incurred during transit.</p>
        <p><strong>Delays in Visa Issuance:</strong></p>
        <p>If visa delays result in missed travel plans, cancellations, or additional expenses,Astir Passage will not be held responsible.</p>
        <p>Thrillophilia will make reasonable efforts to assist with a modified itinerary, provided the customer covers any additional expenses.</p>
        <p>Customers are strongly advised to purchase travel insurance to cover such contingencies.</p>

        <h3>B6. TRANSFERS & TRANSPORT</h3>
        <p><strong>Group vs. Private Transfers:</strong></p>
        <p>Group Transfers: Shared transportation with possible multiple stops and other passengers.</p>
        <p>Private Transfers: Reserved exclusively for Your party from point to pickup to drop mentioned in the Quotation. Unscheduled stops are solely at the driver’s discretion andAstir Passage does not guarantee it.</p>
        <p>Each booking will specify if it’s group or private. You are strongly advised to be at the pickup location 10 mins prior to the scheduled pickup. No refunds for minor delays or the presence of other passengers in group transfers.</p>
        <p><strong>Luggage Allowance & Unscheduled Stops:</strong></p>
        <p>1 piece of baggage + 1 carry-on per person is included. Additional or oversized luggage may require prior notice and extra fees.</p>
        <p>Drivers may refuse unscheduled stops if they violate local regulations or affect subsequent pickups.Astir Passage is not liable for direct arrangements made with drivers.</p>
        <p><strong>Vehicle Breakdown & Delays:</strong></p>
        <p>If a vehicle breakdown occurs,Astir Passage will coordinate an alternative vehicle within a reasonable timeframe.Astir Passage is not liable for missed sightseeing or extra costs from such delays.</p>
        <p><strong>Behavior & Denial of Service:</strong></p>
        <p>Users must behave respectfully toward drivers and co-passengers. Drunkenness, verbal/physical abuse, or safety violations can lead the transport provider to deny or terminate service without refund.</p>
        <p>Users are advised to secure their valuable personal belongings at all times during the trip.Astir Passage shall not be liable for the loss of any items left behind in the coach or other vehicles. All baggage and personal effects remain the sole responsibility of the customer throughout the trip.</p>
        <p><strong>Refund Policy for Missed Transfer/Service Denial:</strong></p>
        <p>Refunds will only be processed if You provide valid proof of claim, such as:</p>
        <ul>
          <li>Written acknowledgment from the driver/service provider for service denial.</li>
          <li>Photographic, recorded or documented evidence of the issue.</li>
        </ul>
        <p>Refund requests without proper documentation will not be entertained.</p>

        <h3>B7. CANCELLATIONS & MODIFICATIONS (PACKAGES)</h3>
        <h4>Cancellation by User</h4>
        <p>The Quotation outlines the cancellation fee schedule (a tiered structure depending on days before departure).</p>
        <p>If You fail to complete required payments by the stated due dates (after reminders), the booking is canceled, and the amount paid will be non-refundable.</p>
        <h4>Cancellation byAstir Passage or Supplier</h4>
        <p>In circumstances like insufficient group size, force majeure events, or the Supplier’s inability to provide the service,Astir Passage will endeavor to inform You at least 7 days before departure (where feasible). You may opt for a full refund or accept an alternative arrangement.</p>
        <p>If the tour is canceled mid-trip for force majeure or safety reasons, refunds (if any) depend on the portion of the trip unused and the Supplier’s discretion.</p>
        <h4>Refund Process:</h4>
        <p>Thrillophilia will only process refunds after receiving the refunded amount from Suppliers. Refunds typically return to the original payment source (bank/card) unless otherwise agreed in writing.</p>
        <p>Convenience fees, TCS, or certain non-refundable amounts may be deducted from the total refund.</p>
        <h4>Modification Policy:</h4>
        <p>Changing dates, participant count, or itinerary after booking is subject to availability and may incur a modification fee (10% of package cost or INR 20,000, whichever is lower), plus any price difference</p>
        <p>Partial Cancellation Policy:</p>
        <p>The per person cost displayed on the itinerary is an estimate, based on fixed and individual cost components for the group.</p>
        <p>In case of a reduction in the number of participants, the refund amount will be calculated on a case-by-case basis, considering the impact on group size, operational feasibility (e.g., car seating capacity, room type), and other factors.</p>
        <p>Pax addition or reduction may lead to recalculated costs, subject to availability and operational constraints.</p>
        <p>Any changes may incur additional charges depending on the new requirements.</p>
        <p><strong>Special Cases Modification Policy:</strong></p>
        <p>Thrillophilia understands that unforeseen emergencies can impact travel plans. In such cases, we strive to minimize User’s financial losses by negotiating with vendors on the user’s behalf.The user must notifyAstir Passage at the earliest in case of such unfortunate events, allowing the company to take necessary steps.</p>
        <p>The 10% modification fee will be waived off, subject to the following conditions:</p>
        <h5>6.1. Medical Emergencies (Within 60 Days of Travel):</h5>
        <p>Covers serious illness, accidents requiring hospitalization, or pregnancy complications , limited to the traveler or their first family members (pregnancy complications limited to travellers only).</p>
        <p>Valid medical documents must be submitted to support the claim.</p>
        <p>Required documents: Hospital discharge certificate, hospital invoice, diagnosis reports (if applicable), and proof of relation if the hospitalized person is a first family member.</p>
        <p>Thrillophilia reserves the right to have these documents cross-examined by experts to verify the authenticity of the claim.</p>
        <h5>6.2. Family Emergencies (Within 60 Days of Travel):</h5>
        <p>Covers the death of an immediate family member (Parents, Spouse, Children, Siblings only of traveler).</p>
        <p>Required documents: Death certificate issued by authorised Government of India body and proof of relation with the traveler.</p>
        <p>Proper documentation is mandatory for consideration.Astir Passage will make every effort to negotiate with vendors to ensure the lowest possible modification or cancellation charges.</p>
        <p>No-Show & Partial Usage:</p>
        <p>Failure to show up at scheduled departure or check-in times may result in the booking being treated as a no-show with no refund due.</p>
        <p>No refunds for partial usage of the package (e.g., leaving mid-tour or skipping certain included activities).</p>
        <p>Trip Secure cancellation Policy applies only to certain destinations. The complete details of this policy are included in the final itinerary shared with the User during booking.</p>
        <h4>Special Case Cancellation:</h4>
        <p>Thrillophilia may, at its discretion, consider cancellations beyond the standard policy only when arising from medical or family emergencies, solely on compassionate grounds*, provided that such claims are substantiated with appropriate supporting documentation. The following conditions and documentation requirements apply</p>
        <h5>8.1 Medical Emergency:</h5>
        <p>A medical emergency refers to incidents occurring within 30 days prior to the scheduled travel date where the traveler has been declared unfit for travel by a certified medical practitioner, with a recommendation against travel for the next 30 days.</p>
        <p>The following conditions, supported by valid documentation, may qualify for medical emergency:</p>
        <ul>
          <li>Accident Requiring Hospitalization: Hospitalization due to accidents, including fractures, severe burns, deep lacerations, or injuries requiring surgery or extensive medical treatment.</li>
          <li>Serious Illness: Life-threatening conditions such as heart attack, stroke, severe infections, or respiratory issues requiring hospitalization or emergency surgery.</li>
          <li>Pregnancy Complications: Complications like preeclampsia or ectopic pregnancy requiring hospitalization or medical intervention.</li>
          <li>Emergency Surgery: Urgent procedures like appendicitis or gallstones requiring immediate surgery.</li>
          <li>Cancer Diagnosis or Chemotherapy: Cancer diagnosis or related treatments requiring hospitalization or affecting travel plans.</li>
          <li>Organ Transplantation: Need for transplant surgery or complications requiring prolonged hospitalization.</li>
          <li>Severe Infections: Conditions such as meningitis or tuberculosis requiring hospitalization.</li>
          <li>Severe Respiratory Conditions: Acute flare-ups of asthma, COPD, or severe allergic reactions requiring hospitalization.</li>
          <li>Accidental Major Trauma: Hospitalization due to major injuries, such as multiple fractures, head injuries, or loss of limb.</li>
          <li>Severe Allergic Reactions: Anaphylaxis or severe allergic reactions requiring emergency medical treatment.</li>
        </ul>
        <h5>Required Documentation for Medical Emergencies:</h5>
        <ul>
          <li>The fitness certificate issued by a Certified Medical Doctor as defined under Section 15 of the Indian Medical Council Act, 1956, or a registered medical practitioner with the respective State Medical Council.</li>
          <li>Hospital discharge certificate, hospital invoice, diagnosis reports (if applicable).</li>
        </ul>
        <h5>8.2 Family Emergency: (Arising 30 Days Before Date of Travel):</h5>
        <p>Family emergency refers to unforeseen and critical situations involving the traveler’s immediate family member (parents, spouse, children, or siblings) that directly impact the traveler’s ability to proceed with their scheduled trip. This includes:</p>
        <ul>
          <li>Death of an Immediate Family Member: The passing of a parent, spouse, child, or sibling. A valid government-issued death certificate along with proof of relation to the traveler is mandatory for claims.</li>
          <li>Diagnosis of a Critical Illness: Diagnosis of a life-threatening chronic disease requiring immediate medical intervention, including but not limited to cancer requiring chemotherapy or radiation, organ transplantation, or any condition that necessitates urgent hospitalization.</li>
          <li>Severe Medical Emergencies: Events such as a heart attack, stroke, or any critical condition that requires emergency hospitalization of the immediate family member.</li>
          <li>Accidental Major Trauma: Hospitalization due to major injuries, including but not limited to multiple fractures, head injuries, or loss of a limb of immediate family members.</li>
        </ul>
        <h5>Required Documentation for Family Emergencies:</h5>
        <ul>
          <li>Medical certification from a Certified Medical Doctor, as defined under Section 15 of the Indian Medical Council Act, 1956, confirming the condition and the patient’s hospitalization.</li>
          <li>Death certificate issued by an authorized government body of India.</li>
          <li>Proof of relationship with the deceased family member.</li>
        </ul>
        <p><strong>Right to Verify:</strong>Astir Passage retains the right to verify all documents submitted in connection with medical and family emergencies. Verification may be conducted by third-party experts or relevant authorities to ensure the authenticity and validity of the claims. If the documentation is found to be falsified or unverifiable, the claim will be rejected, and the cancellation request will not be entertained.</p>
        <p>All cancellation requests made on compassionate grounds must be submitted with the required documentation within the specified time frame. Failure to comply with these requirements will result in the forfeiture of the cancellation request.</p>

        <h3>Complaints & Refund Requests Deadline:</h3>
        <p>Any refund request (e.g., service denial, incomplete services) must be submitted with valid evidence (emails, logs, vendor confirmations) within 5 days of trip completion. Beyond this timeframe, no requests will be entertained.</p>

        <h2>B8. LIMITATION OF LIABILITY</h2>
        <h3>Extent of Liability:</h3>
        <p>Thrillophilia’s total liability for any claims (contract, tort, or otherwise) is capped at the total booking amount paid.</p>
        <p>Thrillophilia is not liable for personal injury, sickness, accident, death, loss of property, or additional costs resulting from actions/omissions by Suppliers, co-travelers, or external factors (weather, government restrictions, etc.).</p>
        <h3>Force Majeure:</h3>
        <p>Thrillophilia shall not be considered in breach of these T&C when events beyond its control (riots, acts of God, pandemics, etc.) prevent it or its Suppliers from providing the booked Services.</p>
        <p>If the event continues beyond a certain period,Astir Passage may either suspend or terminate the affected bookings and will process refunds/alternatives only to the extent suppliers are willing to refund.</p>
        <h3>No Responsibility for Third-Party Content:</h3>
        <p>Thrillophilia is not responsible for user-generated content, external links, or any third-party websites accessible via the Platform. Access them at your own risk.</p>

        <h2>GENERAL PROVISIONS (APPLICABLE TO BOTH PART A & B)</h2>
        <h3>1. USER CONDUCT & CONTENT</h3>
        <p>You agree not to post unlawful, harassing, defamatory, or infringing content onAstir Passage’s Platform.</p>
        <p>Thrillophilia may remove or moderate any content violating these T&C.</p>
        <p>By submitting reviews or photos (“User Content”), You grantAstir Passage an irrevocable, royalty-free license to use, display, or repurpose it for marketing and operational purposes.</p>

        <h3>1.2. Data Collection and Security</h3>
        <p>By usingAstir Passage's services, the User agrees to receive marketing communications, including promotional offers, discounts, and updates about our services, via email, SMS, or other communication channels. The User may opt-out of such communications at any time by following the unsubscribe instructions provided in each communication.Astir Passage will use the User's data for these marketing purposes in accordance with applicable laws and privacy regulations.</p>
        <p>Thrillophilia may share User data with third-party vendors, including but not limited to visa partners, hotels, activity providers, and other service partners, strictly for operational purposes such as obtaining quotes, processing bookings, and facilitating travel-related services. The User acknowledges that multiple agencies may be involved in this process, and each agency's data policy will apply.Astir Passage is not accountable for the data handling practices of these third-party agencies</p>
        <p>User data may be disclosed to law enforcement agencies or regulatory bodies for lawful investigations or legal obligations without requiring prior consent from the User.</p>
        <p>Thrillophilia will not sell, rent, or disclose User data for commercial gains beyond the scope of providing its services. All data sharing will be conducted solely to support, improve, or facilitate the services offered to the User.</p>
        <p>Thrillophilia may share anonymized and/or aggregated User data with third parties for tasks such as payment processing, data hosting, data processing, and creditworthiness assessment.</p>
        <p>Thrillophilia does not store any payment details, such as credit or debit card information. Payments are processed through third-party gateways such as Razorpay, Tazapay etc, and by using these services, Users agree to the privacy policies of these providers.Astir Passage ensures its partners follow industry security standards but is not liable for breaches or issues at the payment gateway’s end.</p>

        <h3>1.3. User Consent for Communication</h3>
        <p>By usingAstir Passage’s services, Users provide unconditional consent for communication through the above-mentioned channels.</p>
        <p>Users agree that such communication is:</p>
        <ul>
          <li>Authorized by them.</li>
          <li>Classified as "transactional" and not "unsolicited commercial communication" as per the Telecom Regulatory Authority of India (TRAI) guidelines.</li>
          <li>In compliance with TRAI or equivalent regulations in India or other jurisdictions.</li>
          <li>This consent overrides any preferences set by the User under the National Customer Preference Register (NCPR) or any similar preferences.</li>
        </ul>
        <p>This consent overrides any preferences set by the User under the National Customer Preference Register (NCPR) or any similar preferences.</p>

        <h2>2. INDEMNIFICATION</h2>
        <p>You agree to indemnify and hold harmlessAstir Passage, its affiliates, officers, employees, and agents from any claims, damages, or liabilities arising from your breach of these T&C, your violation of any law or third-party rights, or your misuse of the Services.</p>

        <h2>3. INTELLECTUAL PROPERTY</h2>
        <p>All logos, trademarks, text, design elements, and software on the Platform are the property ofAstir Passage or licensed to it. You may not reproduce or distribute them without express permission.</p>

        <h2>4. GOVERNING LAW & DISPUTE RESOLUTION</h2>
        <p>These T&C (and any disputes) are governed by Rajasthan Jurisdiction without regard to conflicts-of-law principles.</p>
        <p>Courts in Jaipur, Rajasthan have exclusive jurisdiction.</p>
        <p>If an arbitration clause is stated in your final Quotation, such clause governs dispute resolution. Otherwise, suits must be brought in the appropriate courts of Jaipur, Rajasthan.</p>

        <h2>5. SEVERABILITY & WAIVER</h2>
        <p>If any part of these T&C is found invalid or unenforceable, the remaining sections remain in full effect.</p>
        <p>No waiver of a term shall be considered a continuing waiver unless explicitly stated in writing.</p>

        <h2>6. ENTIRE AGREEMENT & REVISIONS</h2>
        <p>These T&C, plus the final Quotation (for packages) or the specific booking confirmation (for activities), constitute the entire agreement.</p>
        <p>Thrillophilia may update these T&C from time to time. By continuing to use the Platform, You agree to the updated T&C.</p>

        <h2>7. CONTACT & SUPPORT</h2>
        <p>For any support, clarifications, or disputes, please reach out toAstir Passage’s official help page.</p>

        <h2>8. TCS / GST / Invoice Documents</h2>
        <p><strong>TCS Certificates:</strong> Will be issued 45 days after the end of each quarter. (e.g., for tours ending anytime in April–June quarter, TCS certificates will be issued post 15th August).</p>
        <p><strong>GST Certificates:</strong> Will be provided only upon request after tour completion. Users must submit the required details to receive the certificate.</p>

        <h2>9. Policy Updates</h2>
        <p>Thrillophilia reserves the right to modify this Data and Privacy Policy at any time.</p>
        <p>Users will be notified of significant changes via email or an announcement on our website. Continued use of our services constitutes acceptance of the updated policy.</p>
        <p>Thrillophilia will make reasonable efforts to assist customers in securing the best possible refund; however, no guarantees, assurances, or commitments are made regarding the outcome.</p>

        <h2>ACKNOWLEDGMENT</h2>
        <p>By (1) creating an account onAstir Passage, (2) making any Booking (Part A or Part B), or (3) using the Platform, you acknowledge you have read, understood, and agree to these Terms and Conditions in full, including all disclaimers, liabilities, cancellations, modifications, visa/flight/hotel policies, and no-cash deposit rules.</p>

        <p>© 2025Astir Passage Travel Solutions Pvt Ltd,Astir Passage INC,Astir Passage FZCO, and 53 Take Off Private Limited.<br />
        All Rights Reserved.</p>
      </div>
    </>
  );
};

export default TermsAndConditions;
