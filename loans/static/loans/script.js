// ===== NAVIGATION =====
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-' + page);
    if (el) { el.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

function showLoan(type) {
    const data = {
        personal: { title: 'Personal Loan', subtitle: 'No collateral. Instant approval. Any purpose.', features: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Loan Amount</strong><br>₹50,000 – ₹40 Lakhs</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Interest Rate</strong><br>10% – 18% p.a.</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Tenure</strong><br>12 – 60 months</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Processing Fee</strong><br>1% – 3% of amount</div></div>`, eligibility: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">✅ Age: 21–58 years</li><li style="font-size:0.88rem;color:var(--muted)">✅ Min. monthly income: ₹20,000</li><li style="font-size:0.88rem;color:var(--muted)">✅ CIBIL score: 650+</li><li style="font-size:0.88rem;color:var(--muted)">✅ Salaried or self-employed</li></ul>`, docs: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">📄 Aadhaar + PAN Card</li><li style="font-size:0.88rem;color:var(--muted)">💼 Last 3 months salary slips</li><li style="font-size:0.88rem;color:var(--muted)">🏦 6 months bank statement</li><li style="font-size:0.88rem;color:var(--muted)">🖼️ Passport photo</li></ul>`, facts: `<div style="font-size:0.85rem;display:flex;flex-direction:column;gap:10px"><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Type</span><span style="font-weight:600">Unsecured</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Collateral</span><span style="font-weight:600">Not Required</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Approval Time</span><span style="font-weight:600">4 – 24 Hours</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Prepayment</span><span style="font-weight:600">Zero penalty</span></div></div>` },
        business: { title: 'Business Loan', subtitle: 'Fuel your growth without diluting equity.', features: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Loan Amount</strong><br>₹1L – ₹2 Crores</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Interest Rate</strong><br>12% – 20% p.a.</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Tenure</strong><br>12 – 84 months</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Processing Fee</strong><br>1% – 4% of amount</div></div>`, eligibility: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">✅ Business vintage: min. 2 years</li><li style="font-size:0.88rem;color:var(--muted)">✅ Annual turnover: ₹40L+</li><li style="font-size:0.88rem;color:var(--muted)">✅ CIBIL score: 680+</li><li style="font-size:0.88rem;color:var(--muted)">✅ GST registered preferred</li></ul>`, docs: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">📄 Aadhaar + PAN (Personal & Business)</li><li style="font-size:0.88rem;color:var(--muted)">🧾 GST Certificate</li><li style="font-size:0.88rem;color:var(--muted)">📊 Last 2 years ITR with P&L</li><li style="font-size:0.88rem;color:var(--muted)">🏦 12 months bank statement</li></ul>`, facts: `<div style="font-size:0.85rem;display:flex;flex-direction:column;gap:10px"><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Type</span><span style="font-weight:600">Unsecured</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Best For</span><span style="font-weight:600">SMEs, MSMEs</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Approval Time</span><span style="font-weight:600">24 – 72 Hours</span></div></div>` },
        home: { title: 'Home Loan', subtitle: 'Own your dream home with India\'s best rates.', features: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Loan Amount</strong><br>₹5L – ₹5 Crores</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Interest Rate</strong><br>8.75% – 12% p.a.</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Tenure</strong><br>Up to 30 years</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>LTV Ratio</strong><br>Up to 80% of value</div></div>`, eligibility: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">✅ Age: 21–60 years</li><li style="font-size:0.88rem;color:var(--muted)">✅ Min. income: ₹30,000/month</li><li style="font-size:0.88rem;color:var(--muted)">✅ CIBIL: 700+</li><li style="font-size:0.88rem;color:var(--muted)">✅ Property must be legally clear</li></ul>`, docs: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">📄 KYC documents</li><li style="font-size:0.88rem;color:var(--muted)">🏠 Property documents</li><li style="font-size:0.88rem;color:var(--muted)">💼 Income proof</li><li style="font-size:0.88rem;color:var(--muted)">🏦 6 months bank statement</li></ul>`, facts: `<div style="font-size:0.85rem;display:flex;flex-direction:column;gap:10px"><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Type</span><span style="font-weight:600">Secured</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Tax Benefit</span><span style="font-weight:600">Sec 80C + 24B</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Approval</span><span style="font-weight:600">3–7 Business Days</span></div></div>` },
        education: { title: 'Education Loan', subtitle: 'Invest in knowledge today, repay after placement.', features: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Loan Amount</strong><br>Up to ₹1.5 Crores</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Interest Rate</strong><br>8.5% – 14% p.a.</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Moratorium</strong><br>Course + 12 months</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Tenure</strong><br>Up to 15 years</div></div>`, eligibility: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">✅ Admission in recognized institution</li><li style="font-size:0.88rem;color:var(--muted)">✅ Age: 16–35 years</li><li style="font-size:0.88rem;color:var(--muted)">✅ Co-applicant (parent/guardian) required</li></ul>`, docs: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">📄 Admission letter</li><li style="font-size:0.88rem;color:var(--muted)">📚 Fee structure from institution</li><li style="font-size:0.88rem;color:var(--muted)">🪪 Student + Co-applicant KYC</li></ul>`, facts: `<div style="font-size:0.85rem;display:flex;flex-direction:column;gap:10px"><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Tax Benefit</span><span style="font-weight:600">Section 80E</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Repayment Start</span><span style="font-weight:600">After Course</span></div></div>` },
        vehicle: { title: 'Vehicle Loan', subtitle: 'Drive your dream — new or used.', features: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Loan Amount</strong><br>Up to ₹50 Lakhs</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Interest Rate</strong><br>9% – 15% p.a.</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Tenure</strong><br>12 – 84 months</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Processing Fee</strong><br>0.5% – 2% of amount</div></div>`, eligibility: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">✅ Age: 21–65 years</li><li style="font-size:0.88rem;color:var(--muted)">✅ Min. income: ₹15,000/month</li><li style="font-size:0.88rem;color:var(--muted)">✅ CIBIL: 650+</li></ul>`, docs: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">📄 Aadhaar + PAN + DL</li><li style="font-size:0.88rem;color:var(--muted)">🚗 Vehicle quotation/RC (used)</li><li style="font-size:0.88rem;color:var(--muted)">💼 Income proof</li></ul>`, facts: `<div style="font-size:0.85rem;display:flex;flex-direction:column;gap:10px"><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">New Vehicle</span><span style="font-weight:600">100% Funding</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Used Vehicle</span><span style="font-weight:600">Up to 85% LTV</span></div></div>` },
        gold: { title: 'Gold Loan', subtitle: 'Instant cash against your gold at the lowest rates.', features: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Loan Amount</strong><br>₹10,000 – ₹50 Lakhs</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Interest Rate</strong><br>7% – 12% p.a.</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>Tenure</strong><br>3 – 36 months</div><div style="padding:12px 16px;background:var(--teal-xlight);border-radius:10px;font-size:0.88rem"><strong>LTV</strong><br>Up to 75% of gold value</div></div>`, eligibility: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">✅ Age: 18+ years</li><li style="font-size:0.88rem;color:var(--muted)">✅ Own gold (18–24 karat)</li><li style="font-size:0.88rem;color:var(--muted)">✅ No CIBIL requirement</li></ul>`, docs: `<ul style="list-style:none;display:flex;flex-direction:column;gap:8px"><li style="font-size:0.88rem;color:var(--muted)">📄 Aadhaar + PAN</li><li style="font-size:0.88rem;color:var(--muted)">🪙 Gold ornaments for valuation</li></ul>`, facts: `<div style="font-size:0.85rem;display:flex;flex-direction:column;gap:10px"><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Approval Time</span><span style="font-weight:600">30 Minutes</span></div><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">No CIBIL Check</span><span style="font-weight:600">✅ Yes</span></div></div>` }
    };
    const d = data[type];
    document.getElementById('loan-title').textContent = d.title;
    document.getElementById('loan-subtitle').textContent = d.subtitle;
    document.getElementById('loan-features-content').innerHTML = d.features;
    document.getElementById('loan-eligibility-content').innerHTML = d.eligibility;
    document.getElementById('loan-docs-content').innerHTML = d.docs;
    document.getElementById('loan-quick-facts').innerHTML = d.facts;
    showPage('loan');
}

// ===== EMI CALC =====
let heroState = { amt: 500000, rate: 12, tenure: 36 };
function calcHeroEmi(el, valId, field) {
    const v = parseFloat(el.value);
    if (field === 'amt') { heroState.amt = v; document.getElementById(valId).textContent = '₹' + v.toLocaleString('en-IN'); }
    else if (field === 'rate') { heroState.rate = v; document.getElementById(valId).textContent = v + '%'; }
    else { heroState.tenure = v; document.getElementById(valId).textContent = v; }
    const { amt, rate, tenure } = heroState;
    const r = rate / 12 / 100, n = tenure;
    const emi = r === 0 ? amt / n : amt * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = emi * n, interest = total - amt;
    document.getElementById('h-emi').textContent = '₹' + Math.round(emi).toLocaleString('en-IN');
    document.getElementById('h-int').textContent = '₹' + Math.round(interest).toLocaleString('en-IN');
    document.getElementById('h-total').textContent = '₹' + Math.round(total).toLocaleString('en-IN');
}
function calcPageEmi() {
    const amt = parseFloat(document.getElementById('emi-amt').value);
    const rate = parseFloat(document.getElementById('emi-rate').value);
    const tenure = parseInt(document.getElementById('emi-ten').value);
    document.getElementById('emi-amt-val').textContent = '₹' + amt.toLocaleString('en-IN');
    document.getElementById('emi-rate-val').textContent = rate + '%';
    document.getElementById('emi-ten-val').textContent = tenure + ' months';
    const r = rate / 12 / 100, n = tenure;
    const emi = r === 0 ? amt / n : amt * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = emi * n, interest = total - amt;
    document.getElementById('emi-result').textContent = '₹' + Math.round(emi).toLocaleString('en-IN');
    document.getElementById('emi-int').textContent = '₹' + Math.round(interest).toLocaleString('en-IN');
    document.getElementById('emi-total').textContent = '₹' + Math.round(total).toLocaleString('en-IN');
}

// ===== ELIGIBILITY =====
async function checkEligibility() {
    document.getElementById('elig-result-ok').style.display = 'none';
    document.getElementById('elig-result-partial').style.display = 'none';
    document.getElementById('elig-result-no').style.display = 'none';
    const age = parseInt(document.getElementById('elig-age').value) || 0;
    const income = parseInt(document.getElementById('elig-income').value) || 0;
    const emp = document.getElementById('elig-emp').value;
    const existingEmi = parseInt(document.getElementById('elig-emi').value) || 0;
    const cibil = parseInt(document.getElementById('elig-cibil').value) || 0;
    if (!age || !income || emp === 'Select' || cibil === 0) { showToast('Please fill all fields'); return; }
    
    try {
        const res = await fetch('/api/eligibility/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({age, income, existing_emi: existingEmi, cibil})
        });
        const data = await res.json();
        if (data.status === 'ok') {
            document.getElementById('elig-amount').textContent = '₹' + data.eligible_amount.toLocaleString('en-IN');
            document.getElementById('elig-result-ok').style.display = 'block';
        } else if (data.status === 'partial') {
            document.getElementById('elig-result-partial').style.display = 'block';
        } else {
            document.getElementById('elig-result-no').style.display = 'block';
        }
    } catch(e) {
        showToast('Error checking eligibility');
    }
}

// ===== APPLY STEPS =====

async function submitApp() {
    if (!document.getElementById('consent-check').checked) { showToast('Please accept the terms to continue'); return; }
    
    const payload = {
        full_name: document.getElementById('app-name')?.value,
        mobile_number: document.getElementById('app-phone')?.value,
        email: document.getElementById('app-email')?.value,
        dob: document.getElementById('app-dob')?.value,
        pan_number: document.getElementById('app-pan')?.value,
        loan_type: document.getElementById('app-loan-type')?.value,
        employment_type: document.getElementById('app-emp-type')?.value,
        company_name: document.getElementById('app-company')?.value,
        designation: document.getElementById('app-designation')?.value,
        work_experience: document.getElementById('app-work-exp')?.value,
        office_address: document.getElementById('app-office-addr')?.value,
        monthly_income: document.getElementById('app-income')?.value,
        loan_amount_required: document.getElementById('app-loan-amt')?.value,
        loan_tenure_months: document.getElementById('app-loan-tenure')?.value,
        existing_emi: document.getElementById('app-emi')?.value
    };

    try {
        const res = await fetch('/api/apply/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.status === 'success') {
            showToast('🎉 ' + data.message);
            setTimeout(() => { showPage('home'); }, 2000);
        } else {
            showToast('Error: ' + data.message);
        }
    } catch(e) {
        showToast('Error submitting application');
    }
}

// ===== LOGIN =====
async function doLogin() {
    const u = document.getElementById('login-user').value;
    const p = document.getElementById('login-pass').value;
    if (!u || !p) { showToast('Please enter your credentials'); return; }
    
    try {
        const res = await fetch('/api/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: u, password: p})
        });
        const data = await res.json();
        if (res.ok && data.status === 'success') {
            showToast('Login successful!');
            setTimeout(() => showPage('home'), 1200);
        } else {
            showToast(data.message || 'Invalid credentials');
        }
    } catch(e) {
        showToast('Login failed');
    }
}

// ===== FAQ =====
function toggleFaq(btn) {
    const ans = btn.nextElementSibling;
    const span = btn.querySelector('span');
    ans.classList.toggle('open');
    span.textContent = ans.classList.contains('open') ? '–' : '+';
}

// ===== TOAST =====
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3400);
}

// ===== MOBILE MENU =====
function toggleMob() {
    const m = document.getElementById('mob-menu');
    m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}