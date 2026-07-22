const requests = [
  {
    request: "POP002",
    document: "45678901",
    name: "Huamán Ramos Patricia",
    branch: "San Miguel",
    date: "2026-05-18",
    time: "10:45:00",
    stage: "RIESGOS",
    status: "RECHAZADO",
  },
  {
    request: "POP003",
    document: "56789012",
    name: "García Paredes Luis",
    branch: "La Molina",
    date: "2026-05-18",
    time: "16:40:00",
    stage: "RIESGOS",
    status: "OBSERVADO",
  },
  {
    request: "POP001",
    document: "34567890",
    name: "Torres Delgado Ana",
    branch: "Puruchuco",
    date: "2026-05-19",
    time: "11:20:00",
    stage: "OPERACIONES",
    status: "OBSERVADO",
  },
  {
    request: "EFE001",
    document: "12345678",
    name: "Méndez Quispe Carlos",
    branch: "Puruchuco",
    date: "2026-05-20",
    time: "15:30:00",
    stage: "SIMULACIÓN",
    status: "PENDIENTE",
  },
  {
    request: "EFE002",
    document: "12345678",
    name: "López Fernández María",
    branch: "San Miguel",
    date: "2026-05-20",
    time: "15:30:00",
    stage: "RIESGOS",
    status: "PENDIENTE",
  },
  {
    request: "EFE004",
    document: "71865987",
    name: "Pérez García Juan",
    branch: "San Miguel",
    date: "2026-05-22",
    time: "15:30:00",
    stage: "DOCUMENTARIA",
    status: "PENDIENTE",
  },
];

const filtersForm = document.querySelector("#filtersForm");
const requestsBody = document.querySelector("#requestsBody");
const resultCount = document.querySelector("#resultCount");
const resultLabel = document.querySelector("#resultLabel");
const totalCount = document.querySelector("#totalCount");
const inboxHeader = document.querySelector("#inboxHeader");
const inboxView = document.querySelector("#inboxView");
const simulationView = document.querySelector("#simulationView");
const newRequestButton = document.querySelector("#newRequestButton");
const backToInboxButton = document.querySelector("#backToInboxButton");
const addSpouseButton = document.querySelector("#addSpouseButton");
const spouseModal = document.querySelector("#spouseModal");
const closeSpouseModalButton = document.querySelector("#closeSpouseModal");
const cancelSpouseButton = document.querySelector("#cancelSpouseButton");
const filterSpouseButton = document.querySelector("#filterSpouseButton");
const spouseDocument = document.querySelector("#spouseDocument");
const spouseError = document.querySelector("#spouseError");
const spouseContent = document.querySelector("#spouseContent");
const spouseCard = document.querySelector("#spouseCard");
const clientDocument = document.querySelector("#clientDocument");
const clientPhone = document.querySelector("#clientPhone");
const vehiclePrice = document.querySelector("#vehiclePrice");
const simulationForm = document.querySelector("#simulationForm");
const confirmSimulationButton = document.querySelector("#confirmSimulationButton");
const simulationMessage = document.querySelector("#simulationMessage");
const simulationConsentLink = document.querySelector("#simulationConsentLink");
const simulationConsentModal = document.querySelector("#simulationConsentModal");
const closeSimulationConsentModalButton = document.querySelector("#closeSimulationConsentModal");
const creditPrivacyModal = document.querySelector("#creditPrivacyModal");
const closeCreditPrivacyModalButton = document.querySelector("#closeCreditPrivacyModal");
const toastContainer = document.querySelector("#toastContainer");
const dealerSelect = document.querySelector("#dealerSelect");
const simulationBranchSelect = document.querySelector("#simulationBranchSelect");
const manualPersonForm = document.querySelector("#manualPersonForm");
const clientNames = document.querySelector("#clientNames");
const paternalSurname = document.querySelector("#paternalSurname");
const maternalSurname = document.querySelector("#maternalSurname");
const civilStatus = document.querySelector("#civilStatus");
const birthDate = document.querySelector("#birthDate");
const saveManualPerson = document.querySelector("#saveManualPerson");
const editManualPerson = document.querySelector("#editManualPerson");
const resultView = document.querySelector("#resultView");
const resultRequestNumber = document.querySelector("#resultRequestNumber");
const resultDocumentNumber = document.querySelector("#resultDocumentNumber");
const resultDateTime = document.querySelector("#resultDateTime");
const qualificationCard = document.querySelector("#qualificationCard");
const qualificationResult = document.querySelector("#qualificationResult");
const qualificationDescription = document.querySelector("#qualificationDescription");
const pepResult = document.querySelector("#pepResult");
const plaftResult = document.querySelector("#plaftResult");
const plaftDescription = document.querySelector("#plaftDescription");
const pepHolderLabel = document.querySelector("#pepHolderLabel");
const plaftHolderLabel = document.querySelector("#plaftHolderLabel");
const pepSpouseResult = document.querySelector("#pepSpouseResult");
const plaftSpouseResult = document.querySelector("#plaftSpouseResult");
const resultBackButton = document.querySelector("#resultBackButton");
const resultCalculationTab = document.querySelector("#resultCalculationTab");
const resultNextButton = document.querySelector("#resultNextButton");
const calculationView = document.querySelector("#calculationView");
const calculationPreliminaryTab = document.querySelector("#calculationPreliminaryTab");
const calculationBackButton = document.querySelector("#calculationBackButton");
const calculationRequestNumber = document.querySelector("#calculationRequestNumber");
const calculationDateTime = document.querySelector("#calculationDateTime");
const calculationVehiclePrice = document.querySelector("#calculationVehiclePrice");
const calculationPhone = document.querySelector("#calculationPhone");
const initialPayment = document.querySelector("#initialPayment");
const initialPaymentPercentage = document.querySelector("#initialPaymentPercentage");
const selectedTerm = document.querySelector("#selectedTerm");
const amountToFinance = document.querySelector("#amountToFinance");
const calculateButton = document.querySelector("#calculateButton");
const simulateButton = document.querySelector("#simulateButton");
const calculationResultCard = document.querySelector("#calculationResultCard");
const resultTerm = document.querySelector("#resultTerm");
const resultTea = document.querySelector("#resultTea");
const resultInstallment = document.querySelector("#resultInstallment");
const resultCme = document.querySelector("#resultCme");
const resultCapacity = document.querySelector("#resultCapacity");
const resultPortfolio = document.querySelector("#resultPortfolio");
const resultDocuments = document.querySelector("#resultDocuments");
const resultVerification = document.querySelector("#resultVerification");
const paymentDay = document.querySelector("#paymentDay");
const continueRequestButton = document.querySelector("#continueRequestButton");
const calculationSolicitationStageButton = document.querySelector("#calculationSolicitationStageButton");
const solicitationView = document.querySelector("#solicitationView");
const solicitationSimulationStageButton = document.querySelector("#solicitationSimulationStageButton");
const solicitationRequestNumber = document.querySelector("#solicitationRequestNumber");
const solicitationStage = document.querySelector("#solicitationStage");
const solicitationStatus = document.querySelector("#solicitationStatus");
const solicitationPortfolio = document.querySelector("#solicitationPortfolio");
const solicitationDateTime = document.querySelector("#solicitationDateTime");
const solicitationHolderName = document.querySelector("#solicitationHolderName");
const holderDocument = document.querySelector("#holderDocument");
const holderNames = document.querySelector("#holderNames");
const holderPaternalSurname = document.querySelector("#holderPaternalSurname");
const holderMaternalSurname = document.querySelector("#holderMaternalSurname");
const holderBirthDate = document.querySelector("#holderBirthDate");
const holderCivilStatus = document.querySelector("#holderCivilStatus");
const holderPhone = document.querySelector("#holderPhone");
const holderAccordionStatus = document.querySelector("#holderAccordionStatus");
const holderBirthCountry = document.querySelector("#holderBirthCountry");
const holderResidenceCountry = document.querySelector("#holderResidenceCountry");
const holderProfession = document.querySelector("#holderProfession");
const holderEmail = document.querySelector("#holderEmail");
const editHolderPersonal = document.querySelector("#editHolderPersonal");
const cancelHolderPersonal = document.querySelector("#cancelHolderPersonal");
const saveHolderPersonal = document.querySelector("#saveHolderPersonal");
const editHolderContact = document.querySelector("#editHolderContact");
const cancelHolderContact = document.querySelector("#cancelHolderContact");
const saveHolderContact = document.querySelector("#saveHolderContact");
const holderPropertyType = document.querySelector("#holderPropertyType");
const holderAddressYears = document.querySelector("#holderAddressYears");
const holderAddressMonths = document.querySelector("#holderAddressMonths");
const holderDepartment = document.querySelector("#holderDepartment");
const holderProvince = document.querySelector("#holderProvince");
const holderDistrict = document.querySelector("#holderDistrict");
const holderAddress = document.querySelector("#holderAddress");
const holderAddressReference = document.querySelector("#holderAddressReference");
const addressValidationStatus = document.querySelector("#addressValidationStatus");
const validateAddressButton = document.querySelector("#validateAddressButton");
const editHolderAddress = document.querySelector("#editHolderAddress");
const cancelHolderAddress = document.querySelector("#cancelHolderAddress");
const saveHolderAddress = document.querySelector("#saveHolderAddress");
const employmentCategory = document.querySelector("#employmentCategory");
const employerRuc = document.querySelector("#employerRuc");
const workplaceName = document.querySelector("#workplaceName");
const workplaceAddress = document.querySelector("#workplaceAddress");
const employmentActivity = document.querySelector("#employmentActivity");
const employmentPosition = document.querySelector("#employmentPosition");
const employmentPositionLabel = document.querySelector("#employmentPositionLabel");
const employmentStartDate = document.querySelector("#employmentStartDate");
const employmentCurrency = document.querySelector("#employmentCurrency");
const monthlyNetIncome = document.querySelector("#monthlyNetIncome");
const editHolderEmployment = document.querySelector("#editHolderEmployment");
const cancelHolderEmployment = document.querySelector("#cancelHolderEmployment");
const saveHolderEmployment = document.querySelector("#saveHolderEmployment");
const solicitationSpouseAccordion = document.querySelector("#solicitationSpouseAccordion");
const solicitationSpouseName = document.querySelector("#solicitationSpouseName");
const spouseAccordionStatus = document.querySelector("#spouseAccordionStatus");
const spouseHolderDocument = document.querySelector("#spouseHolderDocument");
const spouseHolderNames = document.querySelector("#spouseHolderNames");
const spousePaternalSurname = document.querySelector("#spousePaternalSurname");
const spouseMaternalSurname = document.querySelector("#spouseMaternalSurname");
const spouseGender = document.querySelector("#spouseGender");
const spouseBirthDate = document.querySelector("#spouseBirthDate");
const spouseCivilStatus = document.querySelector("#spouseCivilStatus");
const spouseBirthCountry = document.querySelector("#spouseBirthCountry");
const spouseResidenceCountry = document.querySelector("#spouseResidenceCountry");
const spouseProfession = document.querySelector("#spouseProfession");
const spousePhone = document.querySelector("#spousePhone");
const spouseEmail = document.querySelector("#spouseEmail");
const editSpousePersonal = document.querySelector("#editSpousePersonal");
const cancelSpousePersonal = document.querySelector("#cancelSpousePersonal");
const saveSpousePersonal = document.querySelector("#saveSpousePersonal");
const editSpouseContact = document.querySelector("#editSpouseContact");
const cancelSpouseContact = document.querySelector("#cancelSpouseContact");
const saveSpouseContact = document.querySelector("#saveSpouseContact");
const vehicleAccordionStatus = document.querySelector("#vehicleAccordionStatus");
const solicitationVehicleCondition = document.querySelector("#solicitationVehicleCondition");
const solicitationVehicleDealer = document.querySelector("#solicitationVehicleDealer");
const solicitationVehicleBranch = document.querySelector("#solicitationVehicleBranch");
const vehicleSellerDocumentType = document.querySelector("#vehicleSellerDocumentType");
const vehicleSellerDocument = document.querySelector("#vehicleSellerDocument");
const vehicleSellerName = document.querySelector("#vehicleSellerName");
const solicitationVehicleBrand = document.querySelector("#solicitationVehicleBrand");
const solicitationVehicleModel = document.querySelector("#solicitationVehicleModel");
const solicitationVehicleYear = document.querySelector("#solicitationVehicleYear");
const vehicleOwnership = document.querySelector("#vehicleOwnership");
const vehicleThirdPartyFields = document.querySelectorAll(".vehicle-third-party-field");
const vehicleThirdPartyNames = document.querySelector("#vehicleThirdPartyNames");
const vehicleThirdPartyPaternalSurname = document.querySelector("#vehicleThirdPartyPaternalSurname");
const vehicleThirdPartyMaternalSurname = document.querySelector("#vehicleThirdPartyMaternalSurname");
const vehicleColor = document.querySelector("#vehicleColor");
const vehicleType = document.querySelector("#vehicleType");
const vehicleVin = document.querySelector("#vehicleVin");
const vehicleEngineNumber = document.querySelector("#vehicleEngineNumber");
const documentaryVehicleFields = document.querySelectorAll(".documentary-vehicle-field");
const documentaryVehicleActions = document.querySelector("#documentaryVehicleActions");
const generateGuaranteeButton = document.querySelector("#generateGuaranteeButton");
const editVehicleData = document.querySelector("#editVehicleData");
const cancelVehicleData = document.querySelector("#cancelVehicleData");
const saveVehicleData = document.querySelector("#saveVehicleData");
const creditExchangeRate = document.querySelector("#creditExchangeRate");
const creditVehiclePrice = document.querySelector("#creditVehiclePrice");
const creditInitialPayment = document.querySelector("#creditInitialPayment");
const creditTerm = document.querySelector("#creditTerm");
const creditPaymentDay = document.querySelector("#creditPaymentDay");
const creditTotalFinancing = document.querySelector("#creditTotalFinancing");
const creditNotarialExpenses = document.querySelector("#creditNotarialExpenses");
const creditRegistrationExpenses = document.querySelector("#creditRegistrationExpenses");
const creditSignatureExpenses = document.querySelector("#creditSignatureExpenses");
const creditGpsPlan = document.querySelector("#creditGpsPlan");
const creditGpsCost = document.querySelector("#creditGpsCost");
const creditDoubleInstallments = document.querySelector("#creditDoubleInstallments");
const creditDoubleMonths = document.querySelector("#creditDoubleMonths");
const creditShippingExpenses = document.querySelector("#creditShippingExpenses");
const creditVehicleInsurance = document.querySelector("#creditVehicleInsurance");
const creditVehicleInsuranceCost = document.querySelector("#creditVehicleInsuranceCost");
const creditLifeInsuranceSummary = document.querySelector("#creditLifeInsuranceSummary");
const creditLifeInsuranceTypeSummary = document.querySelector("#creditLifeInsuranceTypeSummary");
const solicitationBackButton = document.querySelector("#solicitationBackButton");
const documentsPortfolioBadge = document.querySelector("#documentsPortfolioBadge");
const requiredDocumentUploads = document.querySelector("#requiredDocumentUploads");
const solicitationDocumentsCard = document.querySelector("#solicitationDocumentsCard");
const postApprovalDocumentsCard = document.querySelector("#postApprovalDocumentsCard");
const postApprovalDocumentList = document.querySelector("#postApprovalDocumentList");
const downloadAllPostApproval = document.querySelector("#downloadAllPostApproval");
const checklistTwoCard = document.querySelector("#checklistTwoCard");
const checklistTwoItems = document.querySelector("#checklistTwoItems");
const checklistTwoError = document.querySelector("#checklistTwoError");
const solicitationComment = document.querySelector("#solicitationComment");
const solicitationCommentEditor = document.querySelector("#solicitationCommentEditor");
const solicitationCommentCount = document.querySelector("#solicitationCommentCount");
const solicitationCommentError = document.querySelector("#solicitationCommentError");
const cancelSolicitationComment = document.querySelector("#cancelSolicitationComment");
const saveSolicitationComment = document.querySelector("#saveSolicitationComment");
const solicitationCommentHistory = document.querySelector("#solicitationCommentHistory");
const sendToRiskButton = document.querySelector("#sendToRiskButton");
const sendToOperationsButton = document.querySelector("#sendToOperationsButton");
const solicitationSubmissionError = document.querySelector("#solicitationSubmissionError");
const calculationValidationMessage = document.querySelector("#calculationValidationMessage");
const exchangeRate = document.querySelector("#exchangeRate");
const vehicleInsuranceType = document.querySelector("#vehicleInsuranceType");
const annualVehicleInsuranceField = document.querySelector("#annualVehicleInsuranceField");
const annualVehicleInsurancePercentage = document.querySelector("#annualVehicleInsurancePercentage");
const creditLifeInsurance = document.querySelector("#creditLifeInsurance");
const creditLifeInsuranceTypeField = document.querySelector("#creditLifeInsuranceTypeField");
const creditLifeInsuranceType = document.querySelector("#creditLifeInsuranceType");
const gpsOption = document.querySelector("#gpsOption");
const gpsTypeField = document.querySelector("#gpsTypeField");
const gpsType = document.querySelector("#gpsType");
const doubleInstallments = document.querySelector("#doubleInstallments");
const doubleInstallmentMonths = document.querySelector("#doubleInstallmentMonths");
const doubleInstallmentMonthsField = document.querySelector("#doubleInstallmentMonthsField");
const registrationExpenses = document.querySelector("#registrationExpenses");
const notarialExpenses = document.querySelector("#notarialExpenses");
const signatureExpenses = document.querySelector("#signatureExpenses");
const shippingExpenses = document.querySelector("#shippingExpenses");
const declaredIncome = document.querySelector("#declaredIncome");
const estimatedIncome = document.querySelector("#estimatedIncome");
const preapprovedAmount = document.querySelector("#preapprovedAmount");
const newPreapprovedAmountField = document.querySelector("#newPreapprovedAmountField");
const newPreapprovedAmount = document.querySelector("#newPreapprovedAmount");
const jointIncomeField = document.querySelector("#jointIncomeField");
const jointIncome = document.querySelector("#jointIncome");
const incomeChevron = document.querySelector("#incomeChevron");
const pilotConditions = document.querySelector("#pilotConditions");
const pilotConditionsField = pilotConditions.closest(".pilot-checkbox");
const incomeDetailPanel = document.querySelector("#incomeDetailPanel");
const closeIncomePanel = document.querySelector("#closeIncomePanel");
const cancelIncomeChanges = document.querySelector("#cancelIncomeChanges");
const saveIncomeChanges = document.querySelector("#saveIncomeChanges");
const incomeSaveMessage = document.querySelector("#incomeSaveMessage");
const holderIncomeRows = document.querySelector("#holderIncomeRows");
const spouseIncomeRows = document.querySelector("#spouseIncomeRows");
const spouseIncomeSection = document.querySelector("#spouseIncomeSection");
const addHolderIncome = document.querySelector("#addHolderIncome");
const addSpouseIncome = document.querySelector("#addSpouseIncome");
const holderIncomeTotal = document.querySelector("#holderIncomeTotal");
const spouseIncomeTotal = document.querySelector("#spouseIncomeTotal");
const combinedIncomeTotal = document.querySelector("#combinedIncomeTotal");
const successModal = document.querySelector("#successModal");
const successRequestNumber = document.querySelector("#successRequestNumber");
const closeSuccessModalButton = document.querySelector("#closeSuccessModal");
const acceptSuccessButton = document.querySelector("#acceptSuccessButton");
const addressMapModal = document.querySelector("#addressMapModal");
const closeAddressMapModalButton = document.querySelector("#closeAddressMapModal");
const cancelAddressValidation = document.querySelector("#cancelAddressValidation");
const confirmAddressValidation = document.querySelector("#confirmAddressValidation");
const addressMapText = document.querySelector("#addressMapText");
const addressMapFrame = document.querySelector("#addressMapFrame");
const addressValidationSuccessModal = document.querySelector("#addressValidationSuccessModal");
const addressValidationResultIcon = document.querySelector("#addressValidationResultIcon");
const addressValidationResultTitle = document.querySelector("#address-valid-title");
const addressValidationResultMessage = document.querySelector("#addressValidationResultMessage");
const acceptAddressValidation = document.querySelector("#acceptAddressValidation");
const plaftDeniedModal = document.querySelector("#plaftDeniedModal");
const plaftDeniedMessage = document.querySelector("#plaftDeniedMessage");
const closePlaftDeniedModal = document.querySelector("#closePlaftDeniedModal");
const acceptPlaftDenied = document.querySelector("#acceptPlaftDenied");
const incompleteSolicitationModal = document.querySelector("#incompleteSolicitationModal");
const incompleteSolicitationMessage = document.querySelector("#incompleteSolicitationMessage");
const closeIncompleteSolicitationModal = document.querySelector("#closeIncompleteSolicitationModal");
const acceptIncompleteSolicitation = document.querySelector("#acceptIncompleteSolicitation");
const phoneOtpModal = document.querySelector("#phoneOtpModal");
const phoneOtpDestination = document.querySelector("#phoneOtpDestination");
const phoneOtpInputs = document.querySelector("#phoneOtpInputs");
const phoneOtpError = document.querySelector("#phoneOtpError");
const closePhoneOtpModal = document.querySelector("#closePhoneOtpModal");
const riskSubmissionSuccessModal = document.querySelector("#riskSubmissionSuccessModal");
const acceptRiskSubmission = document.querySelector("#acceptRiskSubmission");

let resolvedDocument = "";
let manualPersonSaved = false;
let spouseLoaded = false;
let calculationUnlocked = false;
let currentGeneratedRequest = null;
let holderIncomes = [];
let spouseIncomes = [];
let savedHolderIncomes = [];
let savedSpouseIncomes = [];
let incomeChangesPending = false;
let holderPrimaryIncomeLoaded = false;
let spousePrimaryIncomeLoaded = false;
let holderPrimaryEditing = false;
let holderPrimaryBackup = null;

const confirmationServices = [
  "ObtenerBusquedaClientenoreniec",
  "ObtenerDatosCotizador",
  "ObtenerBusquedacliente",
  "ObtenerDatosPersona",
];

const currentExecutiveName = "Luis Sequeiros";
const workflowObservationBars = document.querySelectorAll("[data-workflow-observations]");
let pendingSimulationObservations = [];

const personMocks = {
  "11111111": {
    names: "Carlos",
    paternalSurname: "Méndez",
    maternalSurname: "Quispe",
    civilStatus: "CASADO",
    birthDate: "1988-06-15",
    dollarDebtExposure: true,
  },
  "22222222": {
    names: "Javier",
    paternalSurname: "Pérez",
    maternalSurname: "Gomez",
    civilStatus: "SOLTERO",
    birthDate: "1990-01-01",
  },
  "33333333": {
    names: "Lucía",
    paternalSurname: "Ramírez",
    maternalSurname: "Castro",
    civilStatus: "SOLTERO",
    birthDate: "1987-09-20",
    plaftAlert: true,
  },
  "88888888": {
    names: "Valeria",
    paternalSurname: "Sánchez",
    maternalSurname: "Rojas",
    civilStatus: "SOLTERO",
    birthDate: "1991-11-08",
    addressAlert: true,
  },
};

const addressRiskObservations = [
  { code: "restricted-location", label: "ObsRech14: Microzonas peligrosas", tone: "danger" },
  { code: "policy-not-met", label: "ObsRech19: Convenio - Con Deuda en Judicial último RCC.", tone: "warning" },
  { code: "income-support-required", label: "ObsRech300: INCREMENTO DE INGRESO PERMITIDO", tone: "info" },
  { code: "no-payment-capacity", label: "ObsRech27: Sobreendeudamiento", tone: "critical" },
];

const defaultSpousePerson = {
  names: "María Fernanda",
  paternalSurname: "López",
  maternalSurname: "Torres",
  gender: "Femenino",
  birthDate: "1992-04-18",
  civilStatus: "CASADO",
};

const qualificationMocks = {};

function getWorkflowObservations(documentNumber) {
  if (!/^\d{8}$/.test(documentNumber)) return [];
  const mockPerson = personMocks[documentNumber];
  const observations = [];

  if (!mockPerson) {
    observations.push({
      code: "unregistered-person",
      label: "ObsRech01: Todo cliente filtrado que no se encuentre en nuestra base interna de personas.",
      tone: "warning",
    });
  }

  if (mockPerson?.plaftAlert) {
    observations.push({
      code: "plaft-alert",
      label: "ObsRech03: LAFT",
      tone: "danger",
    });
  }

  if (mockPerson?.dollarDebtExposure) {
    observations.push({
      code: "dollar-debt-exposure",
      label: "ObsRech312: Cliente con exposición de deuda en dólares",
      tone: "info",
    });
  }

  if (mockPerson?.addressAlert) {
    observations.push(
      ...addressRiskObservations
        .filter((observation) => observation.code !== "restricted-location")
        .map((observation) => ({ ...observation })),
    );
  }

  return observations;
}

function renderWorkflowObservations(observations = pendingSimulationObservations) {
  workflowObservationBars.forEach((bar) => {
    bar.hidden = observations.length === 0;
    if (observations.length === 0) {
      bar.replaceChildren();
      return;
    }

    bar.innerHTML = `
      <strong class="workflow-observations-title">OBSERVACIONES</strong>
      <div class="workflow-observations-list">
        ${observations.map((observation) => `
          <div class="workflow-observation-item ${observation.tone}">
            <span aria-hidden="true">!</span>
            <strong>${observation.label}</strong>
          </div>
        `).join("")}
      </div>
    `;
  });
}

const validatedSimulationFields = [
  dealerSelect,
  simulationBranchSelect,
  clientDocument,
  clientPhone,
  vehiclePrice,
];

const manualPersonFields = [
  clientNames,
  paternalSurname,
  maternalSurname,
  civilStatus,
  birthDate,
];

const fields = {
  request: document.querySelector("#requestFilter"),
  document: document.querySelector("#documentFilter"),
  name: document.querySelector("#nameFilter"),
  branch: document.querySelector("#branchFilter"),
  stage: document.querySelector("#stageFilter"),
  status: document.querySelector("#statusFilter"),
  dateFrom: document.querySelector("#dateFromFilter"),
  dateTo: document.querySelector("#dateToFilter"),
};

function normalize(value) {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .trim();
}

function formatDate(date, time) {
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year} ${time}`;
}

function formatPersonDate(date) {
  if (!date) return "Sin completar";
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

function formatMonthlyNetIncome() {
  const amount = parseMoney(monthlyNetIncome.value);
  monthlyNetIncome.value = amount > 0
    ? `S/ ${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : "";
  updateSolicitationAccordionStatuses();
}

function unformatMonthlyNetIncome() {
  const amount = parseMoney(monthlyNetIncome.value);
  monthlyNetIncome.value = amount > 0 ? amount.toFixed(2) : "";
}

function getFilteredRequests() {
  const values = Object.fromEntries(
    Object.entries(fields).map(([key, element]) => [key, element.value.trim()]),
  );

  return requests.filter((item) => {
    const matchesRequest = normalize(item.request).includes(normalize(values.request));
    const matchesDocument = normalize(item.document).includes(normalize(values.document));
    const matchesName = normalize(item.name).includes(normalize(values.name));
    const matchesBranch = !values.branch || item.branch === values.branch;
    const matchesStage = !values.stage || item.stage === values.stage;
    const matchesStatus = !values.status || item.status === values.status;
    const matchesDateFrom = !values.dateFrom || item.date >= values.dateFrom;
    const matchesDateTo = !values.dateTo || item.date <= values.dateTo;

    return (
      matchesRequest &&
      matchesDocument &&
      matchesName &&
      matchesBranch &&
      matchesStage &&
      matchesStatus &&
      matchesDateFrom &&
      matchesDateTo
    );
  });
}

function createRequestRow(item) {
  const row = document.createElement("tr");
  const statusClass = `status-${item.status.toLocaleLowerCase("es")}`;

  row.innerHTML = `
    <td><span class="request-code">${item.request}</span></td>
    <td>${item.document}</td>
    <td>${item.name}</td>
    <td>${item.branch}</td>
    <td>${formatDate(item.date, item.time)}</td>
    <td><span class="stage-text">${item.stage}</span></td>
    <td><span class="status-badge ${statusClass}">${item.status}</span></td>
    <td>
      <button
        class="review-button"
        type="button"
        data-request-id="${item.request}"
        aria-label="Revisar solicitud ${item.request}"
      >Revisar</button>
    </td>
  `;

  return row;
}

function renderRequests() {
  const filteredRequests = getFilteredRequests();
  requestsBody.replaceChildren();

  if (filteredRequests.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.className = "empty-row";
    emptyRow.innerHTML = `
      <td colspan="8">No se encontraron solicitudes con los filtros seleccionados.</td>
    `;
    requestsBody.append(emptyRow);
  } else {
    const rows = filteredRequests.map(createRequestRow);
    requestsBody.append(...rows);
  }

  resultCount.textContent = filteredRequests.length;
  totalCount.textContent = filteredRequests.length;
  resultLabel.textContent = filteredRequests.length === 1 ? "resultado" : "resultados";
}

function showSimulation() {
  resetSimulation();
  clearToasts();
  inboxHeader.hidden = true;
  inboxView.hidden = true;
  resultView.hidden = true;
  calculationView.hidden = true;
  solicitationView.hidden = true;
  simulationView.hidden = false;
  document.title = "EfectiBank | Simulación";
  window.scrollTo({ top: 0, behavior: "auto" });
}

function resetSpouseContent() {
  spouseLoaded = false;
  spouseDocument.value = "";
  spouseContent.replaceChildren();
  spouseCard.classList.remove("has-error");
}

function updateSimulationConfirmAvailability() {
  confirmSimulationButton.disabled = !manualPersonForm.hidden && !manualPersonSaved;
}

function setManualPersonEditing(editing) {
  manualPersonFields.forEach((field) => { field.disabled = !editing; });
  saveManualPerson.hidden = !editing;
  editManualPerson.hidden = editing;
  if (editing) manualPersonSaved = false;
  updateSimulationConfirmAvailability();
}

function saveManualPersonData() {
  if (!validateManualPersonForm()) {
    simulationMessage.textContent = "Completa los datos requeridos de la persona antes de guardar.";
    simulationMessage.classList.add("is-error");
    return;
  }
  manualPersonSaved = true;
  manualPersonFields.forEach((field) => { field.disabled = true; });
  saveManualPerson.hidden = true;
  editManualPerson.hidden = false;
  simulationMessage.textContent = "Datos de la persona guardados.";
  simulationMessage.classList.remove("is-error");
  updateSimulationConfirmAvailability();
}

function resetManualPersonForm() {
  manualPersonFields.forEach((field) => {
    field.value = "";
    field.classList.remove("has-error");
    field.setAttribute("aria-invalid", "false");
  });
  manualPersonSaved = false;
  saveManualPerson.hidden = false;
  editManualPerson.hidden = true;
  manualPersonForm.hidden = true;
  updateSimulationConfirmAvailability();
}

function resetSimulation() {
  closeSpouseModal();
  simulationForm.reset();
  spouseCard.hidden = true;
  resetSpouseContent();
  resetManualPersonForm();
  resolvedDocument = "";
  simulationMessage.textContent = "";
  simulationMessage.classList.remove("is-error");
  pendingSimulationObservations = [];
  renderWorkflowObservations();
  validatedSimulationFields.forEach((field) => {
    field.classList.remove("has-error");
    field.setAttribute("aria-invalid", "false");
  });
}

function setSpouseRequirement(isVisible) {
  spouseCard.hidden = !isVisible;

  if (!isVisible) {
    closeSpouseModal();
    resetSpouseContent();
  }
}

function handleCivilStatusChange() {
  if (resolvedDocument) setSpouseRequirement(true);
}

function resetResolvedPerson() {
  if (resolvedDocument === "" && manualPersonForm.hidden && spouseCard.hidden) return;
  resolvedDocument = "";
  resetManualPersonForm();
  setSpouseRequirement(false);
  simulationMessage.textContent = "";
  simulationMessage.classList.remove("is-error");
  pendingSimulationObservations = [];
  renderWorkflowObservations();
}

function clearToasts() {
  toastContainer.replaceChildren();
}

function showServiceToasts(services, errorServices = []) {
  clearToasts();

  services.forEach((serviceName) => {
    const toast = document.createElement("div");
    toast.className = "service-toast";
    if (errorServices.includes(serviceName)) {
      toast.classList.add("service-toast-error");
    }
    toast.setAttribute("role", "status");

    const statusIcon = document.createElement("span");
    statusIcon.className = "toast-status-icon";
    statusIcon.setAttribute("aria-hidden", "true");
    statusIcon.textContent = "✓";

    const copy = document.createElement("span");
    copy.className = "toast-copy";
    copy.textContent = serviceName;

    const closeButton = document.createElement("button");
    closeButton.className = "toast-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", `Cerrar notificación ${serviceName}`);
    closeButton.textContent = "×";
    closeButton.addEventListener("click", () => toast.remove());

    toast.append(statusIcon, copy, closeButton);
    toastContainer.append(toast);
  });
}

function showConfirmationToasts(includeProductToast = false) {
  const services = includeProductToast
    ? [...confirmationServices, "MallaLineaProductosVehicular"]
    : confirmationServices;
  showServiceToasts(services, ["MallaLineaProductosVehicular"]);
}

function showCalculationToasts() {
  const services = ["ObtenerParametrosTC"];
  showServiceToasts(services, services);
}

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function getCurrentDateData() {
  const now = new Date();
  const year = now.getFullYear();
  const month = padNumber(now.getMonth() + 1);
  const day = padNumber(now.getDate());
  const hours = padNumber(now.getHours());
  const minutes = padNumber(now.getMinutes());
  const seconds = padNumber(now.getSeconds());

  return {
    year,
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}:${seconds}`,
    display: `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`,
  };
}

function generateRequestNumber(year) {
  const prefix = `EJE${year}`;
  const highestSequence = requests.reduce((highest, item) => {
    if (!item.request.startsWith(prefix)) return highest;
    const sequence = Number(item.request.slice(prefix.length));
    return Number.isFinite(sequence) ? Math.max(highest, sequence) : highest;
  }, 0);

  return `${prefix}${String(highestSequence + 1).padStart(3, "0")}`;
}

function getManualPersonData() {
  return {
    names: clientNames.value.trim(),
    paternalSurname: paternalSurname.value.trim(),
    maternalSurname: maternalSurname.value.trim(),
    civilStatus: civilStatus.value,
    birthDate: birthDate.value,
  };
}

function getQualificationForDocument(documentNumber) {
  const result = qualificationMocks[documentNumber] || "CALIFICA";
  return result === "REQUIERE SUSTENTO" ? result : "CALIFICA";
}

function applyQualificationRule(documentNumber) {
  const result = getQualificationForDocument(documentNumber);
  const requiresSupport = result === "REQUIERE SUSTENTO";

  qualificationResult.textContent = result;
  qualificationDescription.textContent = requiresSupport
    ? "El cliente requiere presentar sustento para continuar con la evaluación."
    : "El cliente cumple con los criterios de evaluación.";
  qualificationCard.classList[requiresSupport ? "add" : "remove"]("requires-support");
}

function applyComplianceRule(person) {
  const hasRegisteredSpouse = spouseLoaded;
  const hasPlaftAlert = Boolean(person.plaftAlert);

  pepResult.textContent = "No aplica";
  plaftResult.textContent = hasPlaftAlert
    ? "Alerta PLAFT"
    : "Sin observaciones";
  plaftDescription.textContent = hasPlaftAlert
    ? "El cliente cuenta con observaciones PLAFT"
    : "El cliente no presenta observaciones en listas restrictivas.";
  plaftResult.closest(".compliance-subject")?.classList.toggle("has-plaft-alert", hasPlaftAlert);
  pepHolderLabel.hidden = !hasRegisteredSpouse;
  plaftHolderLabel.hidden = !hasRegisteredSpouse;
  pepSpouseResult.hidden = !hasRegisteredSpouse;
  plaftSpouseResult.hidden = !hasRegisteredSpouse;
}

function populateResultScreen(requestNumber, person, dateData, documentNumber = clientDocument.value) {
  resultRequestNumber.textContent = requestNumber;
  resultDocumentNumber.textContent = documentNumber;
  resultDateTime.textContent = dateData.display;
  applyQualificationRule(documentNumber);
  applyComplianceRule(person);
  successRequestNumber.textContent = requestNumber;
}

function parseMoney(value) {
  const normalized = String(value).replace(/[^0-9.,]/g, "").replace(/,/g, "");
  const parts = normalized.split(".");
  const numeric = parts.length > 1 ? `${parts.slice(0, -1).join("")}.${parts.at(-1)}` : normalized;
  return Number(numeric) || 0;
}

function populateCalculationScreen() {
  if (!currentGeneratedRequest) return;
  calculationRequestNumber.textContent = currentGeneratedRequest.requestNumber;
  calculationDateTime.textContent = currentGeneratedRequest.dateData.display;
  calculationVehiclePrice.value = currentGeneratedRequest.vehiclePrice;
}

function emptyIncome() {
  return { category: "", profile: "", situation: "", startDate: "", ruc: "", monthlyIncome: "", annualized: "No" };
}

function primaryIncomeMock() {
  return {
    category: "5ta categoría",
    profile: "Formal",
    situation: "Dependiente",
    startDate: "2021-01-04",
    ruc: "20123456789",
    monthlyIncome: parseMoney(estimatedIncome.value).toFixed(2),
    annualized: "No",
  };
}

function optionList(options, selected) {
  return options.map((option) => `<option value="${option}"${option === selected ? " selected" : ""}>${option || "Seleccionar"}</option>`).join("");
}

function incomeRowMarkup(income, index, owner) {
  const removable = index > 0 ? `<button class="remove-income-button" type="button" data-remove-income="${owner}" data-index="${index}">Quitar</button>` : "";
  const ownerLabel = owner === "holder" ? "titular" : "conyugue";
  const incomeLabel = index === 0 ? `Ingresos primarios ${ownerLabel}` : `Ingresos secundarios ${ownerLabel}`;
  const fieldsDisabled = "";
  const primaryActions = removable;
  return `<article class="income-entry" data-owner="${owner}" data-index="${index}">
    <div class="income-entry-heading"><span>${incomeLabel}</span>${primaryActions}</div>
    <div class="income-entry-grid">
      <label>Tipo de categoría<select data-field="category"${fieldsDisabled}>${optionList(["", "Sin categoría", "1ra categoría", "2da categoría", "3ra categoría", "4ta categoría", "5ta categoría"], income.category)}</select></label>
      <label>Perfil<select data-field="profile"${fieldsDisabled}>${optionList(["", "Formal", "Informal"], income.profile)}</select></label>
      <label>Situación laboral<select data-field="situation"${fieldsDisabled}>${optionList(["", "Dependiente", "Independiente"], income.situation)}</select></label>
      <label>Fecha de ingreso laboral<input data-field="startDate" type="date" value="${income.startDate}"${fieldsDisabled}></label>
      <label>Ingreso neto mensual<input data-field="monthlyIncome" inputmode="decimal" placeholder="S/ 0.00" value="${income.monthlyIncome}"${fieldsDisabled}></label>
      <label>¿Ingreso anualizado?<select data-field="annualized"${fieldsDisabled}>${optionList(["No", "Si"], income.annualized)}</select></label>
    </div>
  </article>`;
}

function formatSoles(value) {
  return `S/ ${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function incomeTotal(incomes) {
  return incomes.reduce((total, income) => total + (Number(income.monthlyIncome) || 0), 0);
}

function getDraftIncomeTotals() {
  const holderTotal = incomeTotal(holderIncomes);
  const spouseTotal = currentGeneratedRequest?.hasSpouse && jointIncome.checked ? incomeTotal(spouseIncomes) : 0;
  return { holderTotal, spouseTotal, total: holderTotal + spouseTotal };
}

function updateIncomeDraftTotals() {
  const { holderTotal, spouseTotal, total } = getDraftIncomeTotals();
  holderIncomeTotal.textContent = formatSoles(holderTotal);
  spouseIncomeTotal.textContent = formatSoles(spouseTotal);
  combinedIncomeTotal.textContent = formatSoles(total);
}

function commitDeclaredIncomeTotal() {
  const { total } = getDraftIncomeTotals();
  updateIncomeDraftTotals();
  declaredIncome.value = total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  pilotConditions.disabled = total <= 0;
  pilotConditionsField.classList.toggle("is-disabled", total <= 0);
  if (total <= 0) pilotConditions.checked = false;
  updateNewPreapprovedAmount();
}

function updateNewPreapprovedAmount(reveal = false) {
  const declaredAmount = parseMoney(declaredIncome.value);
  const estimatedAmount = parseMoney(estimatedIncome.value);
  const shouldShow = declaredAmount > estimatedAmount;

  newPreapprovedAmountField.hidden = !(shouldShow && reveal);
  if (!shouldShow) {
    newPreapprovedAmount.value = "";
    return;
  }

  const previousAmount = parseMoney(preapprovedAmount.textContent);
  const additionalCapacity = Math.max(1000, (declaredAmount - estimatedAmount) * 12);
  const calculatedAmount = previousAmount + additionalCapacity;
  newPreapprovedAmount.value = `S/. ${calculatedAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function setIncomeChangesPending(pending) {
  const wasPending = incomeChangesPending;
  incomeChangesPending = pending;
  cancelIncomeChanges.disabled = !pending;
  saveIncomeChanges.disabled = !pending;
  if (pending && !wasPending) incomeSaveMessage.textContent = "";
  if (!pending) incomeDetailPanel.classList.remove("has-unsaved-changes");
}

function markIncomeChangesPending() {
  setIncomeChangesPending(true);
  updateIncomeDraftTotals();
  invalidateFinancingResults();
}

function showUnsavedIncomeWarning() {
  if (!incomeChangesPending) return;
  incomeDetailPanel.classList.add("has-unsaved-changes");
  incomeSaveMessage.textContent = "Guarda o cancela los cambios realizados en los ingresos antes de continuar.";
}

function renderIncomeRows() {
  holderIncomeRows.innerHTML = holderIncomes.map((income, index) => incomeRowMarkup(income, index, "holder")).join("");
  spouseIncomeRows.innerHTML = spouseIncomes.map((income, index) => incomeRowMarkup(income, index, "spouse")).join("");
  addHolderIncome.disabled = holderIncomes.length >= 2;
  addSpouseIncome.disabled = spouseIncomes.length >= 2;
  updateIncomeDraftTotals();
  if (!incomeChangesPending) commitDeclaredIncomeTotal();
  if (currentGeneratedRequest) updateCalculateAvailability();
}

function resetDeclaredIncomes(hasSpouse) {
  holderIncomes = [emptyIncome()];
  spouseIncomes = hasSpouse ? [emptyIncome()] : [];
  holderPrimaryIncomeLoaded = false;
  spousePrimaryIncomeLoaded = false;
  holderPrimaryEditing = false;
  holderPrimaryBackup = null;
  savedHolderIncomes = cloneIncomeList(holderIncomes);
  savedSpouseIncomes = cloneIncomeList(spouseIncomes);
  setIncomeChangesPending(false);
  jointIncomeField.hidden = true;
  jointIncome.checked = false;
  spouseIncomeSection.hidden = true;
  incomeDetailPanel.hidden = true;
  declaredIncome.setAttribute("aria-expanded", "false");
  incomeChevron.textContent = "⌄";
  pilotConditions.checked = false;
  renderIncomeRows();
}

function syncJointIncomeFields() {
  const enabled = Boolean(currentGeneratedRequest?.hasSpouse && jointIncome.checked);
  spouseIncomeSection.hidden = !enabled;
  if (enabled && !spousePrimaryIncomeLoaded) {
    spouseIncomes = [emptyIncome()];
    spousePrimaryIncomeLoaded = true;
  }
  renderIncomeRows();
}

function toggleIncomePanel(forceOpen, shouldInvalidate = true) {
  const open = typeof forceOpen === "boolean" ? forceOpen : incomeDetailPanel.hidden;
  if (!open && incomeChangesPending) {
    showUnsavedIncomeWarning();
    return;
  }
  if (open && shouldInvalidate) invalidateFinancingResults();
  if (open && !holderPrimaryIncomeLoaded) {
    holderIncomes = [emptyIncome()];
    holderPrimaryIncomeLoaded = true;
    renderIncomeRows();
  }
  incomeDetailPanel.hidden = !open;
  jointIncomeField.hidden = !(open && currentGeneratedRequest?.hasSpouse);
  declaredIncome.setAttribute("aria-expanded", String(open));
  incomeChevron.textContent = open ? "⌃" : "⌄";
  updateCalculateAvailability();
}

function addIncome(owner) {
  const incomes = owner === "holder" ? holderIncomes : spouseIncomes;
  if (incomes.length >= 2) return;
  incomes.push(emptyIncome());
  setIncomeChangesPending(true);
  renderIncomeRows();
  invalidateFinancingResults();
}

function handleIncomeField(event) {
  const entry = event.target.closest(".income-entry");
  const field = event.target.dataset.field;
  if (!entry || !field) return;
  const incomes = entry.dataset.owner === "holder" ? holderIncomes : spouseIncomes;
  const income = incomes[Number(entry.dataset.index)];
  if (field === "ruc") event.target.value = event.target.value.replace(/\D/g, "").slice(0, 11);
  if (field === "monthlyIncome") sanitizeTwoDecimalInput(event);
  income[field] = event.target.value;
  markIncomeChangesPending();
  updateCalculateAvailability();
}

function handleIncomeClick(event) {
  const primaryAction = event.target.closest("[data-primary-action]");
  if (primaryAction) {
    const action = primaryAction.dataset.primaryAction;
    if (action === "edit") {
      holderPrimaryBackup = { ...holderIncomes[0] };
      holderPrimaryEditing = true;
    } else if (action === "cancel") {
      if (holderPrimaryBackup) holderIncomes[0] = { ...holderPrimaryBackup };
      holderPrimaryEditing = false;
      holderPrimaryBackup = null;
      invalidateFinancingResults();
    } else if (action === "save") {
      holderPrimaryEditing = false;
      holderPrimaryBackup = null;
      invalidateFinancingResults();
    }
    renderIncomeRows();
    return;
  }
  const button = event.target.closest("[data-remove-income]");
  if (!button) return;
  const incomes = button.dataset.removeIncome === "holder" ? holderIncomes : spouseIncomes;
  incomes.splice(Number(button.dataset.index), 1);
  setIncomeChangesPending(true);
  renderIncomeRows();
  invalidateFinancingResults();
}

function formatIncomeAmount(event) {
  if (event.target.dataset.field !== "monthlyIncome") return;
  formatTwoDecimalInput(event);
  const entry = event.target.closest(".income-entry");
  const incomes = entry.dataset.owner === "holder" ? holderIncomes : spouseIncomes;
  incomes[Number(entry.dataset.index)].monthlyIncome = event.target.value;
  markIncomeChangesPending();
}

function getVisibleIncomeEntries() {
  return [
    ...holderIncomeRows.querySelectorAll(".income-entry"),
    ...(spouseIncomeSection.hidden ? [] : spouseIncomeRows.querySelectorAll(".income-entry")),
  ];
}

function validateIncomeDraft(showErrors = false) {
  const validations = [];
  getVisibleIncomeEntries().forEach((entry) => {
    const category = entry.querySelector('[data-field="category"]');
    const profile = entry.querySelector('[data-field="profile"]');
    const situation = entry.querySelector('[data-field="situation"]');
    const startDate = entry.querySelector('[data-field="startDate"]');
    const monthlyIncome = entry.querySelector('[data-field="monthlyIncome"]');
    const annualized = entry.querySelector('[data-field="annualized"]');
    validations.push(
      [category, category.value !== ""],
      [profile, profile.value !== ""],
      [situation, situation.value !== ""],
      [startDate, startDate.value !== ""],
      [monthlyIncome, parseMoney(monthlyIncome.value) > 0],
      [annualized, annualized.value !== ""],
    );
  });
  validations.forEach(([field, valid]) => setCalculationFieldValidity(field, valid, showErrors));
  const firstInvalid = validations.find(([, valid]) => !valid);
  if (showErrors && firstInvalid) firstInvalid[0].focus();
  return validations.length > 0 && !firstInvalid;
}

function saveIncomeDraft() {
  if (!incomeChangesPending) return;
  if (!validateIncomeDraft(true)) {
    incomeDetailPanel.classList.add("has-unsaved-changes");
    incomeSaveMessage.textContent = "Completa los campos de ingresos resaltados antes de guardar.";
    return;
  }
  savedHolderIncomes = cloneIncomeList(holderIncomes);
  savedSpouseIncomes = cloneIncomeList(spouseIncomes);
  setIncomeChangesPending(false);
  commitDeclaredIncomeTotal();
  incomeSaveMessage.textContent = "Datos de ingresos guardados.";
  invalidateFinancingResults();
  if (currentGeneratedRequest) {
    currentGeneratedRequest.holderIncomes = cloneIncomeList(savedHolderIncomes);
    currentGeneratedRequest.spouseIncomes = cloneIncomeList(savedSpouseIncomes);
  }
}

function cancelIncomeDraft() {
  holderIncomes = [emptyIncome()];
  spouseIncomes = currentGeneratedRequest?.hasSpouse ? [emptyIncome()] : [];
  savedHolderIncomes = cloneIncomeList(holderIncomes);
  savedSpouseIncomes = cloneIncomeList(spouseIncomes);
  holderPrimaryIncomeLoaded = true;
  spousePrimaryIncomeLoaded = Boolean(currentGeneratedRequest?.hasSpouse && jointIncome.checked);
  setIncomeChangesPending(false);
  renderIncomeRows();
  commitDeclaredIncomeTotal();
  incomeSaveMessage.textContent = "";
  invalidateFinancingResults();
}

function cloneIncomeList(incomes) {
  return incomes.map((income) => ({ ...income }));
}

function getCalculationControls() {
  return Array.from(calculationView.querySelectorAll("input, select"));
}

function getCalculationControlKey(control, index) {
  if (control.id) return `id:${control.id}`;
  const incomeEntry = control.closest(".income-entry");
  if (incomeEntry && control.dataset.field) {
    return `income:${incomeEntry.dataset.owner}:${incomeEntry.dataset.index}:${control.dataset.field}`;
  }
  return `index:${index}`;
}

function resetCalculationControls() {
  getCalculationControls().forEach((control) => {
    control.classList.remove("has-error");
    control.setAttribute("aria-invalid", "false");
    if (control.type === "checkbox") {
      control.checked = control.defaultChecked;
    } else if (control.tagName === "SELECT") {
      const defaultIndex = Array.from(control.options).findIndex((option) => option.defaultSelected);
      control.selectedIndex = defaultIndex >= 0 ? defaultIndex : 0;
    } else {
      control.value = control.defaultValue;
    }
  });
  calculationPhone.value = currentGeneratedRequest?.phone || "";
  initialPayment.value = "";
  initialPaymentPercentage.textContent = "0.00%";
  amountToFinance.value = "";
  updateNewPreapprovedAmount(false);
  simulateButton.hidden = true;
  simulateButton.disabled = true;
  paymentDay.disabled = true;
  paymentDay.value = "";
  calculationResultCard.hidden = true;
  continueRequestButton.disabled = true;
  if (currentGeneratedRequest) currentGeneratedRequest.simulateVisible = false;
  if (currentGeneratedRequest) currentGeneratedRequest.calculationResultVisible = false;
  calculationValidationMessage.textContent = "";
  syncVehicleInsuranceFields();
  syncCreditLifeInsuranceFields();
  syncGpsFields();
  syncDoubleInstallmentFields();
  updateCalculateAvailability();
}

function captureCalculationControls() {
  return getCalculationControls().map((control, index) => ({
    key: getCalculationControlKey(control, index),
    value: control.value,
    checked: control.type === "checkbox" ? control.checked : undefined,
  }));
}

function restoreCalculationControls(savedControls) {
  if (!Array.isArray(savedControls)) return;
  const savedByKey = new Map(savedControls.filter((saved) => saved.key).map((saved) => [saved.key, saved]));
  const hasKeyedControls = savedByKey.size > 0;
  getCalculationControls().forEach((control, index) => {
    control.classList.remove("has-error");
    control.setAttribute("aria-invalid", "false");
    const saved = hasKeyedControls ? savedByKey.get(getCalculationControlKey(control, index)) : savedControls[index];
    if (!saved) return;
    control.value = saved.value;
    if (control.type === "checkbox") control.checked = Boolean(saved.checked);
  });
  syncVehicleInsuranceFields();
  syncCreditLifeInsuranceFields();
  syncGpsFields();
  syncDoubleInstallmentFields();
  updateInitialPaymentPercentage();
  updateCalculateAvailability();
}

function saveCurrentWorkflow(lastScreen) {
  if (!currentGeneratedRequest) return;
  currentGeneratedRequest.lastScreen = lastScreen;
  currentGeneratedRequest.calculationUnlocked = calculationUnlocked;
  currentGeneratedRequest.controls = captureCalculationControls();
  currentGeneratedRequest.holderIncomes = cloneIncomeList(incomeChangesPending ? savedHolderIncomes : holderIncomes);
  currentGeneratedRequest.spouseIncomes = cloneIncomeList(incomeChangesPending ? savedSpouseIncomes : spouseIncomes);
  currentGeneratedRequest.holderPrimaryIncomeLoaded = holderPrimaryIncomeLoaded;
  currentGeneratedRequest.spousePrimaryIncomeLoaded = spousePrimaryIncomeLoaded;
  currentGeneratedRequest.holderPrimaryEditing = holderPrimaryEditing;
  currentGeneratedRequest.holderPrimaryBackup = holderPrimaryBackup ? { ...holderPrimaryBackup } : null;
  currentGeneratedRequest.incomePanelOpen = !incomeDetailPanel.hidden;
  currentGeneratedRequest.simulateVisible = !simulateButton.hidden;
  currentGeneratedRequest.calculationResultVisible = !calculationResultCard.hidden;
  if (!solicitationView.hidden) currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
}

function captureSolicitationDetails() {
  return {
    civilStatus: holderCivilStatus.value,
    birthCountry: holderBirthCountry.value,
    residenceCountry: holderResidenceCountry.value,
    profession: holderProfession.value,
    phone: holderPhone.value,
    email: holderEmail.value,
    propertyType: holderPropertyType.value,
    addressYears: holderAddressYears.value,
    addressMonths: holderAddressMonths.value,
    department: holderDepartment.value,
    province: holderProvince.value,
    district: holderDistrict.value,
    address: holderAddress.value,
    reference: holderAddressReference.value,
    addressValidated: Boolean(currentGeneratedRequest.addressValidated),
    employmentCategory: employmentCategory.value,
    employerRuc: employerRuc.value,
    workplaceName: workplaceName.value,
    workplaceAddress: workplaceAddress.value,
    employmentActivity: employmentActivity.value,
    employmentPosition: employmentPosition.value,
    employmentStartDate: employmentStartDate.value,
    employmentCurrency: employmentCurrency.value,
    monthlyNetIncome: monthlyNetIncome.value,
    spouseCivilStatus: spouseCivilStatus.value,
    spouseBirthCountry: spouseBirthCountry.value,
    spouseResidenceCountry: spouseResidenceCountry.value,
    spouseProfession: spouseProfession.value,
    spousePhone: spousePhone.value,
    spouseEmail: spouseEmail.value,
    sellerDocumentType: vehicleSellerDocumentType.value,
    sellerDocument: vehicleSellerDocument.value,
    sellerName: vehicleSellerName.value,
    vehicleBrand: solicitationVehicleBrand.value,
    vehicleModel: solicitationVehicleModel.value,
    vehicleYear: solicitationVehicleYear.value,
    vehicleOwnership: vehicleOwnership.value,
    vehicleThirdPartyNames: vehicleThirdPartyNames.value,
    vehicleThirdPartyPaternalSurname: vehicleThirdPartyPaternalSurname.value,
    vehicleThirdPartyMaternalSurname: vehicleThirdPartyMaternalSurname.value,
    vehicleColor: vehicleColor.value,
    vehicleType: vehicleType.value,
    vehicleVin: vehicleVin.value,
    vehicleEngineNumber: vehicleEngineNumber.value,
    guaranteeGenerated: Boolean(currentGeneratedRequest.guaranteeGenerated),
  };
}

function restoreWorkflow(workflow) {
  currentGeneratedRequest = workflow;
  pendingSimulationObservations = workflow.observations || getWorkflowObservations(workflow.document);
  currentGeneratedRequest.observations = [...pendingSimulationObservations];
  renderWorkflowObservations();
  spouseLoaded = workflow.hasSpouse;
  calculationUnlocked = workflow.calculationUnlocked;
  resultCalculationTab.disabled = !calculationUnlocked;
  resultCalculationTab.setAttribute("aria-disabled", String(!calculationUnlocked));
  populateResultScreen(workflow.requestNumber, workflow.person, workflow.dateData, workflow.document);
  populateCalculationScreen();

  holderIncomes = cloneIncomeList(workflow.holderIncomes || [emptyIncome()]);
  spouseIncomes = workflow.hasSpouse ? cloneIncomeList(workflow.spouseIncomes || [emptyIncome()]) : [];
  savedHolderIncomes = cloneIncomeList(holderIncomes);
  savedSpouseIncomes = cloneIncomeList(spouseIncomes);
  setIncomeChangesPending(false);
  holderPrimaryIncomeLoaded = Boolean(workflow.holderPrimaryIncomeLoaded);
  spousePrimaryIncomeLoaded = Boolean(workflow.spousePrimaryIncomeLoaded);
  holderPrimaryEditing = Boolean(workflow.holderPrimaryEditing);
  holderPrimaryBackup = workflow.holderPrimaryBackup ? { ...workflow.holderPrimaryBackup } : null;
  jointIncomeField.hidden = true;
  spouseIncomeSection.hidden = true;
  renderIncomeRows();
  restoreCalculationControls(workflow.controls);
  syncJointIncomeFields();
  simulateButton.hidden = !workflow.simulateVisible;
  paymentDay.disabled = !workflow.simulateVisible;
  simulateButton.disabled = paymentDay.value === "";
  commitDeclaredIncomeTotal();
  updateNewPreapprovedAmount(Boolean(workflow.simulateVisible));
  calculationResultCard.hidden = !workflow.calculationResultVisible;
  if (workflow.calculationResultVisible) renderCalculationResult(false);
  toggleIncomePanel(Boolean(workflow.incomePanelOpen), false);

  inboxHeader.hidden = true;
  inboxView.hidden = true;
  simulationView.hidden = true;
  resultView.hidden = workflow.lastScreen !== "result";
  calculationView.hidden = workflow.lastScreen !== "calculation";
  solicitationView.hidden = workflow.lastScreen !== "solicitation";
  if (workflow.lastScreen === "solicitation") populateSolicitationScreen();
  syncSolicitationStageNavigation();
  applyReadOnlyWorkflowMode();
  document.title = `EfectiBank | Solicitud ${workflow.requestNumber}`;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function reviewRequest(requestId) {
  const item = requests.find((request) => request.request === requestId);
  if (!item?.workflow) return;
  closeSuccessModal();
  clearToasts();
  restoreWorkflow(item.workflow);
}

function showResultScreen() {
  if (!calculationView.hidden) saveCurrentWorkflow("result");
  if (currentGeneratedRequest) currentGeneratedRequest.lastScreen = "result";
  clearToasts();
  calculationView.hidden = true;
  solicitationView.hidden = true;
  resultView.hidden = false;
  applyReadOnlyWorkflowMode();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function showCalculationScreen() {
  if (!calculationUnlocked) return;
  populateCalculationScreen();
  if (currentGeneratedRequest) currentGeneratedRequest.lastScreen = "calculation";
  syncSolicitationStageNavigation();
  resultView.hidden = true;
  calculationView.hidden = false;
  solicitationView.hidden = true;
  applyReadOnlyWorkflowMode();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function syncSolicitationStageNavigation() {
  const canNavigate = Boolean(isWorkflowReadOnly() || (
    currentGeneratedRequest?.solicitationStarted
    && !currentGeneratedRequest.solicitationNavigationLocked
    && currentGeneratedRequest.calculationResultVisible
  ));
  calculationSolicitationStageButton.disabled = !canNavigate;
  calculationSolicitationStageButton.setAttribute("aria-disabled", String(!canNavigate));
}

function isWorkflowReadOnly() {
  return Boolean(currentGeneratedRequest?.sentToRisk || currentGeneratedRequest?.readOnlyWorkflow);
}

function isEFE004DocumentaryPending() {
  return currentGeneratedRequest?.requestNumber === "EFE004"
    && (currentGeneratedRequest.stage || "").toUpperCase() === "DOCUMENTARIA"
    && (currentGeneratedRequest.status || "").toUpperCase() === "PENDIENTE";
}

function isEFE004OperationsPending() {
  return currentGeneratedRequest?.requestNumber === "EFE004"
    && (currentGeneratedRequest.stage || "").toUpperCase() === "OPERACIONES"
    && (currentGeneratedRequest.status || "").toUpperCase() === "PENDIENTE";
}

function isEFE004PostApprovalStage() {
  return isEFE004DocumentaryPending() || isEFE004OperationsPending();
}

function setWorkflowControlDisabled(control) {
  if (!("workflowPreviousDisabled" in control.dataset)) {
    control.dataset.workflowPreviousDisabled = String(control.disabled);
  }
  control.disabled = true;
}

function clearReadOnlyWorkflowMode() {
  document.querySelectorAll("[data-workflow-previous-disabled]").forEach((control) => {
    control.disabled = control.dataset.workflowPreviousDisabled === "true";
    delete control.dataset.workflowPreviousDisabled;
  });
  calculationView.classList.remove("workflow-readonly");
  solicitationView.classList.remove("workflow-readonly");
}

function applyReadOnlyWorkflowMode() {
  if (!isWorkflowReadOnly()) {
    clearReadOnlyWorkflowMode();
    return;
  }
  calculationView.classList.add("workflow-readonly");
  solicitationView.classList.add("workflow-readonly");
  calculationView.querySelectorAll("input, select").forEach(setWorkflowControlDisabled);
  calculationView.querySelectorAll(".income-detail-panel button").forEach(setWorkflowControlDisabled);
  solicitationView.querySelectorAll("input, select, textarea").forEach(setWorkflowControlDisabled);
  [calculateButton, simulateButton, continueRequestButton, resultNextButton, sendToRiskButton,
    sendToOperationsButton, downloadAllPostApproval,
    validateAddressButton, editHolderPersonal, cancelHolderPersonal, saveHolderPersonal,
    editHolderContact, cancelHolderContact, saveHolderContact, editSpousePersonal,
    cancelSpousePersonal, saveSpousePersonal, editSpouseContact, cancelSpouseContact,
    saveSpouseContact, editHolderAddress, cancelHolderAddress, saveHolderAddress,
    editHolderEmployment, cancelHolderEmployment, saveHolderEmployment,
    editVehicleData, cancelVehicleData, saveVehicleData,
    cancelSolicitationComment, saveSolicitationComment]
    .forEach(setWorkflowControlDisabled);
  if (isEFE004DocumentaryPending()) {
    [vehicleColor, vehicleType, vehicleVin, vehicleEngineNumber].forEach((field) => { field.disabled = false; });
    [editVehicleData, cancelVehicleData, saveVehicleData].forEach((button) => { button.disabled = false; });
    solicitationComment.disabled = false;
    cancelSolicitationComment.disabled = false;
    saveSolicitationComment.disabled = false;
    checklistTwoItems.querySelectorAll("input").forEach((input) => { input.disabled = false; });
    sendToOperationsButton.disabled = false;
    downloadAllPostApproval.disabled = false;
    updateSolicitationAccordionStatuses();
  }
}

function returnToSimulationFromSolicitation() {
  saveCurrentWorkflow("calculation");
  showCalculationScreen();
}

function resetSolicitationEntryData() {
  if (!currentGeneratedRequest?.solicitationStarted || currentGeneratedRequest.solicitationNavigationLocked) return;
  currentGeneratedRequest.solicitationNavigationLocked = true;
  currentGeneratedRequest.solicitationDetails = null;
  currentGeneratedRequest.documentUploads = {};
  currentGeneratedRequest.comments = [];
  currentGeneratedRequest.addressValidated = false;
  currentGeneratedRequest.person = { ...(currentGeneratedRequest.simulationPerson || currentGeneratedRequest.person) };
  currentGeneratedRequest.spousePerson = currentGeneratedRequest.hasSpouse ? { ...defaultSpousePerson } : null;
  calculationSolicitationStageButton.disabled = true;
  calculationSolicitationStageButton.setAttribute("aria-disabled", "true");
}

function unlockAndShowCalculation() {
  calculationUnlocked = true;
  resultCalculationTab.disabled = false;
  resultCalculationTab.setAttribute("aria-disabled", "false");
  if (currentGeneratedRequest) currentGeneratedRequest.calculationUnlocked = true;
  showCalculationScreen();
  showCalculationToasts();
}

function updateInitialPaymentPercentage() {
  const price = parseMoney(calculationVehiclePrice.value);
  const payment = parseMoney(initialPayment.value);
  initialPaymentPercentage.textContent = `${price ? ((payment / price) * 100).toFixed(2) : "0.00"}%`;
}

function unformatInitialPayment() {
  const amount = parseMoney(initialPayment.value);
  initialPayment.value = amount > 0 ? amount.toFixed(2) : "";
}

function formatInitialPayment() {
  const amount = parseMoney(initialPayment.value);
  const vehicleAmount = parseMoney(calculationVehiclePrice.value);

  if (!(amount > 0) || amount >= vehicleAmount) {
    initialPayment.value = "";
    initialPayment.classList.add("has-error");
    initialPayment.setAttribute("aria-invalid", "true");
    updateInitialPaymentPercentage();
    updateCalculateAvailability();
    calculationValidationMessage.textContent = amount >= vehicleAmount && vehicleAmount > 0
      ? "La cuota inicial debe ser menor al precio del vehículo."
      : "Ingresa un monto de cuota inicial mayor que cero.";
    return;
  }

  initialPayment.value = `$ ${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  initialPayment.classList.remove("has-error");
  initialPayment.setAttribute("aria-invalid", "false");
  updateInitialPaymentPercentage();
  updateCalculateAvailability();
}

function calculateFinancing() {
  if (incomeChangesPending) {
    showUnsavedIncomeWarning();
    calculationValidationMessage.textContent = "Guarda o cancela los cambios de ingresos antes de calcular.";
    return;
  }
  if (!validateCalculationRequirements(true)) {
    calculationValidationMessage.textContent = "Completa los campos requeridos resaltados para calcular.";
    return;
  }
  calculationValidationMessage.textContent = "";
  updateInitialPaymentPercentage();
  const vehicleAmount = parseMoney(calculationVehiclePrice.value);
  const initialAmount = parseMoney(initialPayment.value);
  const exchangeRateAmount = parseMoney(exchangeRate.value);
  const insuranceAmount = annualVehicleInsuranceField.hidden
    ? 0
    : vehicleAmount * (parseMoney(annualVehicleInsurancePercentage.value) / 100);
  const gpsAmount = 0;
  const financed = Math.max(0, (vehicleAmount - initialAmount + insuranceAmount + gpsAmount) * exchangeRateAmount);
  amountToFinance.value = `S/ ${financed.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  updateNewPreapprovedAmount(true);
  simulateButton.hidden = false;
  simulateButton.disabled = paymentDay.value === "";
  paymentDay.disabled = false;
  calculationResultCard.hidden = true;
  continueRequestButton.disabled = true;
  if (currentGeneratedRequest) currentGeneratedRequest.simulateVisible = true;
  if (currentGeneratedRequest) currentGeneratedRequest.calculationResultVisible = false;
  showFinancingToasts();
}

function invalidateFinancingResults() {
  amountToFinance.value = "";
  updateNewPreapprovedAmount(false);
  simulateButton.hidden = true;
  simulateButton.disabled = true;
  paymentDay.value = "";
  paymentDay.disabled = true;
  calculationResultCard.hidden = true;
  continueRequestButton.disabled = true;
  if (currentGeneratedRequest) {
    currentGeneratedRequest.simulateVisible = false;
    currentGeneratedRequest.calculationResultVisible = false;
  }
}

function handleFinancingDataChange(event) {
  if (event.target.matches("input:not([readonly]), select")) resetSolicitationEntryData();
  if (event.target === paymentDay) {
    calculationResultCard.hidden = true;
    continueRequestButton.disabled = true;
    simulateButton.disabled = paymentDay.value === "";
    if (currentGeneratedRequest) currentGeneratedRequest.calculationResultVisible = false;
    return;
  }
  if (event.target.matches("input:not([readonly]), select")) invalidateFinancingResults();
}

function renderCalculationResult(shouldScroll = true) {
  const financedAmount = parseMoney(amountToFinance.value);
  const months = Number.parseInt(selectedTerm.value, 10) || 0;
  const annualEffectiveRate = 0.128;
  const monthlyRate = Math.pow(1 + annualEffectiveRate, 1 / 12) - 1;
  const installment = months > 0 && financedAmount > 0
    ? financedAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months))
    : 0;
  const estimatedIncomeAmount = parseMoney(estimatedIncome.value);
  const declaredIncomeAmount = parseMoney(declaredIncome.value);
  const maximumCapacity = (estimatedIncomeAmount + declaredIncomeAmount) * 0.35;
  const meetsCapacity = installment <= maximumCapacity;
  const hasDeclaredIncome = parseMoney(declaredIncome.value) > 0;
  const isFullPortfolio = !meetsCapacity || hasDeclaredIncome;
  const hasSpouse = Boolean(currentGeneratedRequest?.hasSpouse);
  const requiresSpouseDocuments = Boolean(hasSpouse && currentGeneratedRequest?.spouseDocument);
  const holderHasDeclaredIncome = incomeTotal(holderIncomes) > 0;
  const spouseHasDeclaredIncome = Boolean(hasSpouse && jointIncome.checked && incomeTotal(spouseIncomes) > 0);

  resultTerm.textContent = selectedTerm.value || "—";
  resultTea.textContent = "12.80%";
  resultInstallment.textContent = formatSoles(installment);
  resultCme.textContent = formatSoles(maximumCapacity);
  resultCapacity.textContent = meetsCapacity ? "Cumple" : "Requiere sustento";
  resultCapacity.classList.toggle("does-not-meet", !meetsCapacity);
  resultPortfolio.textContent = isFullPortfolio ? "FULL" : "EXPRESS";
  resultVerification.textContent = isFullPortfolio ? "Verificación domiciliaria" : "No aplica";
  const documents = ["Copia de DNI (Titular)"];
  if (requiresSpouseDocuments) documents.push("Copia de DNI (Conyugue)");
  if (holderHasDeclaredIncome) documents.push("Sustento de ingresos (Titular)");
  if (spouseHasDeclaredIncome) documents.push("Sustento de ingresos (Conyugue)");
  if (isFullPortfolio) documents.push("Recibo de servicios", "Cotización del vehículo");
  resultDocuments.replaceChildren(...documents.map((documentName) => {
    const item = document.createElement("li");
    item.textContent = documentName;
    return item;
  }));
  calculationResultCard.hidden = false;
  continueRequestButton.disabled = false;
  if (currentGeneratedRequest) currentGeneratedRequest.calculationResultVisible = true;
  if (shouldScroll) showServiceToasts(["Servicio Vehicular"], ["Servicio Vehicular"]);
  if (shouldScroll) calculationResultCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function populateSolicitationScreen() {
  if (!currentGeneratedRequest) return;
  const person = currentGeneratedRequest.person;
  const holderName = `${person.names} ${person.paternalSurname} ${person.maternalSurname}`;
  const portfolio = resultPortfolio.textContent;

  solicitationRequestNumber.textContent = currentGeneratedRequest.requestNumber;
  solicitationStage.textContent = currentGeneratedRequest.stage || (currentGeneratedRequest.sentToRisk ? "RIESGOS" : "SOLICITUD");
  solicitationStatus.textContent = currentGeneratedRequest.status || "PENDIENTE";
  solicitationPortfolio.textContent = portfolio;
  solicitationPortfolio.classList.toggle("full", portfolio === "FULL");
  solicitationDateTime.textContent = currentGeneratedRequest.dateData.display;
  solicitationHolderName.textContent = holderName;
  holderDocument.textContent = currentGeneratedRequest.document;
  holderNames.textContent = person.names;
  holderPaternalSurname.textContent = person.paternalSurname;
  holderMaternalSurname.textContent = person.maternalSurname;
  holderBirthDate.textContent = formatPersonDate(person.birthDate);
  const details = currentGeneratedRequest.solicitationDetails || {};
  holderCivilStatus.value = details.civilStatus || person.civilStatus;
  holderBirthCountry.value = details.birthCountry || "";
  holderResidenceCountry.value = details.residenceCountry || "";
  holderProfession.value = details.profession || "";
  holderPhone.value = details.phone || calculationPhone.value || "";
  holderEmail.value = details.email || "";
  holderPropertyType.value = details.propertyType || "";
  holderAddressYears.value = details.addressYears || "";
  holderAddressMonths.value = details.addressMonths || "";
  holderDepartment.value = details.department || "";
  holderProvince.value = details.province || "";
  holderDistrict.value = details.district || "";
  holderAddress.value = details.address || "";
  holderAddressReference.value = details.reference || "";
  currentGeneratedRequest.addressValidated = Boolean(details.addressValidated);
  addressValidationStatus.textContent = currentGeneratedRequest.addressValidated ? "Validada" : "Por confirmar";
  addressValidationStatus.classList.toggle("validated", currentGeneratedRequest.addressValidated);
  employmentCategory.value = details.employmentCategory || "";
  employerRuc.value = details.employerRuc || "";
  workplaceName.value = details.workplaceName || "";
  workplaceAddress.value = details.workplaceAddress || "";
  employmentActivity.value = details.employmentActivity || "";
  employmentPosition.value = details.employmentPosition || "";
  syncEmploymentPositionLabel();
  employmentStartDate.value = details.employmentStartDate || "";
  employmentCurrency.value = details.employmentCurrency || "Soles (S/)";
  monthlyNetIncome.value = details.monthlyNetIncome || "";
  editHolderContact.disabled = false;
  solicitationSpouseAccordion.hidden = !currentGeneratedRequest.hasSpouse;
  currentGeneratedRequest.spousePerson ||= { ...defaultSpousePerson };
  const spousePerson = currentGeneratedRequest.spousePerson;
  solicitationSpouseName.textContent = `${spousePerson.names} ${spousePerson.paternalSurname} ${spousePerson.maternalSurname}`;
  spouseHolderDocument.textContent = currentGeneratedRequest.spouseDocument || "Sin completar";
  spouseHolderNames.textContent = spousePerson.names;
  spousePaternalSurname.textContent = spousePerson.paternalSurname;
  spouseMaternalSurname.textContent = spousePerson.maternalSurname;
  spouseGender.textContent = spousePerson.gender;
  spouseBirthDate.textContent = formatPersonDate(spousePerson.birthDate);
  spouseCivilStatus.value = details.spouseCivilStatus || spousePerson.civilStatus;
  spouseBirthCountry.value = details.spouseBirthCountry || "";
  spouseResidenceCountry.value = details.spouseResidenceCountry || "";
  spouseProfession.value = details.spouseProfession || "";
  spousePhone.value = details.spousePhone || "";
  spouseEmail.value = details.spouseEmail || "";
  solicitationVehicleCondition.value = "Nuevo";
  solicitationVehicleDealer.value = currentGeneratedRequest.dealer;
  solicitationVehicleBranch.value = currentGeneratedRequest.branch;
  vehicleSellerDocumentType.value = details.sellerDocumentType || "DNI";
  vehicleSellerDocument.value = details.sellerDocument || "";
  vehicleSellerName.value = details.sellerName || "";
  solicitationVehicleBrand.value = details.vehicleBrand || "";
  solicitationVehicleModel.value = details.vehicleModel || "";
  solicitationVehicleYear.value = details.vehicleYear || "";
  syncVehicleOwnershipOptions(details.vehicleOwnership || "");
  vehicleOwnership.value = details.vehicleOwnership || "";
  vehicleThirdPartyNames.value = details.vehicleThirdPartyNames || "";
  vehicleThirdPartyPaternalSurname.value = details.vehicleThirdPartyPaternalSurname || "";
  vehicleThirdPartyMaternalSurname.value = details.vehicleThirdPartyMaternalSurname || "";
  syncThirdPartyOwnershipFields();
  const postApprovalMode = isEFE004PostApprovalStage();
  documentaryVehicleFields.forEach((field) => { field.hidden = !postApprovalMode; });
  documentaryVehicleActions.hidden = !postApprovalMode;
  solicitationDocumentsCard.hidden = postApprovalMode;
  postApprovalDocumentsCard.hidden = !postApprovalMode;
  checklistTwoCard.hidden = !postApprovalMode;
  vehicleColor.value = details.vehicleColor || "";
  vehicleType.value = details.vehicleType || "";
  vehicleVin.value = details.vehicleVin || "";
  vehicleEngineNumber.value = details.vehicleEngineNumber || "";
  generateGuaranteeButton.textContent = currentGeneratedRequest.guaranteeGenerated ? "Garantía generada" : "Generar garantía";
  renderPostApprovalDocuments();
  renderChecklistTwo();
  creditExchangeRate.value = exchangeRate.value;
  creditVehiclePrice.value = calculationVehiclePrice.value;
  creditInitialPayment.value = initialPayment.value;
  creditTerm.value = selectedTerm.value;
  creditPaymentDay.value = paymentDay.value;
  creditTotalFinancing.value = amountToFinance.value;
  creditNotarialExpenses.value = notarialExpenses.value;
  creditRegistrationExpenses.value = registrationExpenses.value;
  creditSignatureExpenses.value = signatureExpenses.value;
  creditGpsPlan.value = gpsOption.value === "sin_gps" ? "Sin GPS" : gpsType.value;
  creditGpsCost.value = "No aplica";
  creditDoubleInstallments.value = doubleInstallments.value;
  creditDoubleMonths.value = doubleInstallments.value === "Si" ? doubleInstallmentMonths.value : "No aplica";
  creditShippingExpenses.value = shippingExpenses.value;
  creditVehicleInsurance.value = vehicleInsuranceType.selectedOptions[0].textContent;
  creditVehicleInsuranceCost.value = annualVehicleInsuranceField.hidden ? "No aplica" : (annualVehicleInsurancePercentage.value || "0.00 %");
  creditLifeInsuranceSummary.value = creditLifeInsurance.selectedOptions[0].textContent;
  creditLifeInsuranceTypeSummary.value = creditLifeInsuranceTypeField.hidden ? "No aplica" : creditLifeInsuranceType.value;
  setPersonalEditing(false);
  setContactEditing(false);
  setSpousePersonalEditing(false);
  setSpouseContactEditing(false);
  setAddressEditing(false);
  setEmploymentEditing(false);
  setVehicleEditing(false);
  updateSolicitationAccordionStatuses();
  renderRequiredDocumentUploads();
  renderSolicitationComments();
  sendToRiskButton.closest(".risk-submit-action").hidden = isEFE004PostApprovalStage();
  sendToOperationsButton.hidden = !isEFE004DocumentaryPending();
  solicitationBackButton.textContent = isEFE004DocumentaryPending()
    ? "Volver a Bandeja"
    : (isEFE004OperationsPending() ? "Regresar a bandeja" : "Regresar");
}

function resetSolicitationCommentEditor() {
  solicitationComment.value = "";
  solicitationCommentCount.textContent = "0";
  solicitationCommentError.textContent = "";
}

const postApprovalDocumentNames = [
  "Carta de aprobación",
  "Contrato de crédito",
  "Pagaré",
  "Hoja resumen (TCEA)",
  "Cronograma preliminar",
  "Póliza de seguro vehicular",
  "Póliza de desgravamen",
  "Contrato de garantía",
];

const checklistTwoRequirements = [
  { key: "fileContracts", name: "FILE DE CONTRATOS", required: true, maxFiles: 2 },
  { key: "quotation", name: "COTIZACIÓN", required: true, maxFiles: 2 },
  { key: "featuresLetter", name: "CARTA DE CARACTERÍSTICAS", required: true, maxFiles: 2 },
  { key: "initialPaymentSupport", name: "SUSTENTO CUOTA INICIAL", required: true, maxFiles: 2 },
  { key: "others", name: "OTROS", required: false, maxFiles: 5 },
];

function renderPostApprovalDocuments() {
  if (!currentGeneratedRequest || !isEFE004PostApprovalStage()) {
    postApprovalDocumentList.replaceChildren();
    return;
  }
  const downloaded = new Set(currentGeneratedRequest.downloadedPostApprovalDocuments || []);
  postApprovalDocumentList.replaceChildren(...postApprovalDocumentNames.map((name) => {
    const row = document.createElement("div");
    row.className = "post-approval-document-row";
    row.dataset.documentName = name;
    if (downloaded.has(name)) row.classList.add("downloaded");
    const label = document.createElement("strong");
    label.textContent = name;
    const action = document.createElement("button");
    action.type = "button";
    action.className = "post-approval-download-button";
    action.dataset.downloadPostApproval = name;
    const isGuarantee = name === "Contrato de garantía";
    action.disabled = isEFE004OperationsPending() || (isGuarantee && !currentGeneratedRequest.guaranteeGenerated);
    action.textContent = downloaded.has(name) ? "✓  Descargado" : (action.disabled ? "▣  Descargar" : "⇩  Descargar");
    row.append(label, action);
    return row;
  }));
}

function renderChecklistTwo() {
  if (!currentGeneratedRequest) return;
  if (Array.isArray(currentGeneratedRequest.checklistTwoFiles)) {
    currentGeneratedRequest.checklistTwoFiles = { others: [...currentGeneratedRequest.checklistTwoFiles] };
  }
  currentGeneratedRequest.checklistTwoFiles ||= {};
  const readOnly = isEFE004OperationsPending();
  const openItems = new Set(Array.from(checklistTwoItems.querySelectorAll("details[open]"), (item) => item.dataset.checklistKey));
  checklistTwoItems.replaceChildren(...checklistTwoRequirements.map((requirement) => {
    const files = currentGeneratedRequest.checklistTwoFiles[requirement.key] || [];
    const item = document.createElement("details");
    item.className = "checklist-two-item";
    item.dataset.checklistKey = requirement.key;
    item.open = openItems.has(requirement.key);
    const header = document.createElement("summary");
    const title = document.createElement("strong");
    title.textContent = requirement.name;
    const status = document.createElement("span");
    status.className = files.length > 0 || !requirement.required ? "checklist-two-status complete" : "checklist-two-status";
    status.textContent = files.length ? `${files.length} PDF${files.length === 1 ? "" : "s"}` : (requirement.required ? "Obligatorio" : "Opcional");
    header.append(title, status);
    const help = document.createElement("p");
    help.textContent = requirement.required
      ? "Adjunta como mínimo 1 y como máximo 2 archivos PDF."
      : `Puedes adjuntar hasta ${requirement.maxFiles} archivos PDF de manera opcional.`;
    const list = document.createElement("div");
    list.className = "uploaded-document-list checklist-two-files";
    files.forEach((fileName, index) => {
      const row = document.createElement("div");
      const name = document.createElement("span");
      name.textContent = `▤ ${fileName}`;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Eliminar";
      remove.dataset.removeChecklistKey = requirement.key;
      remove.dataset.removeChecklistIndex = String(index);
      remove.hidden = readOnly;
      row.append(name, remove);
      list.append(row);
    });
    const content = document.createElement("div");
    content.className = "checklist-two-item-content";
    content.append(help, list);
    if (!readOnly && files.length < requirement.maxFiles) {
      const picker = document.createElement("label");
      picker.className = "document-file-picker checklist-two-picker";
      picker.textContent = "＋ Adjuntar documento";
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".pdf,application/pdf";
      input.multiple = true;
      input.dataset.checklistInputKey = requirement.key;
      picker.append(input);
      content.append(picker);
    }
    item.append(header, content);
    return item;
  }));
  checklistTwoError.textContent = "";
}

function markPostApprovalDocumentDownloaded(name) {
  currentGeneratedRequest.downloadedPostApprovalDocuments ||= [];
  if (!currentGeneratedRequest.downloadedPostApprovalDocuments.includes(name)) {
    currentGeneratedRequest.downloadedPostApprovalDocuments.push(name);
  }
}

function renderSolicitationComments() {
  const comments = currentGeneratedRequest.comments || [];
  const riskComments = currentGeneratedRequest.riskComments || [];
  const hasDocumentaryComment = comments.some((comment) => comment.stage === "DOCUMENTARIA");
  const canRegisterSolicitationComment = !isWorkflowReadOnly()
    && solicitationStage.textContent === "SOLICITUD"
    && solicitationStatus.textContent === "PENDIENTE"
    && comments.length === 0;
  const canRegisterDocumentaryComment = isEFE004DocumentaryPending() && !hasDocumentaryComment;
  const canRegisterComment = canRegisterSolicitationComment || canRegisterDocumentaryComment;
  solicitationCommentEditor.hidden = !canRegisterComment;
  solicitationCommentHistory.replaceChildren();

  const appendExecutiveComment = (comment) => {
    const article = document.createElement("article");
    article.className = "saved-solicitation-comment";
    const executive = document.createElement("p");
    executive.innerHTML = "<strong>Ejecutivo financiero:</strong> ";
    executive.append(document.createTextNode(comment.executive));
    const date = document.createElement("p");
    date.innerHTML = "<strong>Fecha y hora:</strong> ";
    date.append(document.createTextNode(comment.dateTime));
    const copy = document.createElement("p");
    copy.innerHTML = "<strong>Comentario:</strong> ";
    copy.append(document.createTextNode(comment.comment));
    article.append(executive, date, copy);
    solicitationCommentHistory.append(article);
  };

  comments.filter((comment) => comment.stage !== "DOCUMENTARIA").forEach(appendExecutiveComment);
  riskComments.forEach((comment) => {
    const article = document.createElement("article");
    article.className = "saved-solicitation-comment risk-comment";
    const analyst = document.createElement("p");
    analyst.innerHTML = "<strong>Analista de riesgos:</strong> ";
    analyst.append(document.createTextNode(comment.analyst));
    const date = document.createElement("p");
    date.innerHTML = "<strong>Fecha y hora:</strong> ";
    date.append(document.createTextNode(comment.dateTime));
    const decision = document.createElement("p");
    decision.innerHTML = "<strong>Decisión:</strong> ";
    decision.append(document.createTextNode(comment.decision));
    const copy = document.createElement("p");
    copy.innerHTML = "<strong>Comentario:</strong> ";
    copy.append(document.createTextNode(comment.comment));
    article.append(analyst, date, decision, copy);
    solicitationCommentHistory.append(article);
  });
  comments.filter((comment) => comment.stage === "DOCUMENTARIA").forEach(appendExecutiveComment);
  resetSolicitationCommentEditor();
}

function saveCurrentSolicitationComment() {
  const isDocumentaryComment = isEFE004DocumentaryPending();
  if (isDocumentaryComment && currentGeneratedRequest.comments?.some((comment) => comment.stage === "DOCUMENTARIA")) {
    renderSolicitationComments();
    return;
  }
  if (!isDocumentaryComment && currentGeneratedRequest.comments?.length) {
    renderSolicitationComments();
    return;
  }
  const comment = solicitationComment.value.trim();
  if (!comment) {
    solicitationCommentError.textContent = "Ingresa un comentario antes de guardar.";
    solicitationComment.focus();
    return;
  }
  currentGeneratedRequest.comments ||= [];
  currentGeneratedRequest.comments.push({
    executive: currentExecutiveName,
    dateTime: getCurrentDateData().display,
    comment,
    stage: isDocumentaryComment ? "DOCUMENTARIA" : "SOLICITUD",
  });
  renderSolicitationComments();
}

function validateSolicitationForRisk() {
  const validationTargets = [
    holderAccordionStatus.closest(".solicitation-accordion"),
    solicitationSpouseAccordion,
    vehicleAccordionStatus.closest(".solicitation-accordion"),
    document.querySelector(".solicitation-documents-card"),
  ];
  validationTargets.forEach((target) => target?.classList.remove("submission-error-highlight"));
  solicitationSubmissionError.textContent = "";

  const missing = [];
  if (!holderAccordionStatus.classList.contains("complete")) {
    missing.push({ label: "datos del titular", target: validationTargets[0] });
  }
  if (currentGeneratedRequest.hasSpouse && !spouseAccordionStatus.classList.contains("complete")) {
    missing.push({ label: "datos del conyugue", target: validationTargets[1] });
  }
  if (!vehicleAccordionStatus.classList.contains("complete")) {
    missing.push({ label: "datos del vehículo", target: validationTargets[2] });
  }
  if (!currentGeneratedRequest.addressValidated) {
    missing.push({ label: "validación de la dirección", target: validationTargets[0] });
  }

  const requiredDocumentCount = resultDocuments.querySelectorAll("li").length;
  const documentsComplete = Array.from({ length: requiredDocumentCount }, (_, index) =>
    currentGeneratedRequest.documentUploads?.[`document-${index}`]?.length || 0)
    .every((count) => count >= 1 && count <= 2);
  if (!documentsComplete) missing.push({ label: "documentos requeridos", target: validationTargets[3] });

  if (missing.length) {
    missing.forEach(({ target }) => target?.classList.add("submission-error-highlight"));
    incompleteSolicitationMessage.textContent = `Completa antes de continuar: ${missing.map(({ label }) => label).join(", ")}.`;
    incompleteSolicitationModal.hidden = false;
    document.body.classList.add("modal-open");
    missing[0].target?.scrollIntoView({ behavior: "smooth", block: "center" });
    return false;
  }
  return true;
}

function findPlaftObservation() {
  if (normalize(plaftResult.textContent) !== "sin observaciones") {
    return { role: "Titular", name: solicitationHolderName.textContent };
  }
  const spousePlaftResult = plaftSpouseResult.querySelector("strong")?.textContent || "Sin observaciones";
  if (currentGeneratedRequest.hasSpouse && normalize(spousePlaftResult) !== "sin observaciones") {
    return { role: "Conyugue", name: solicitationSpouseName.textContent };
  }
  return null;
}

function closePlaftModal() {
  plaftDeniedModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function closeIncompleteSolicitationPopup() {
  incompleteSolicitationModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function resetOtpGroup(group, error) {
  group.querySelectorAll("input").forEach((input) => { input.value = ""; });
  error.textContent = "";
  window.requestAnimationFrame(() => group.querySelector("input")?.focus());
}

function openPhoneOtp() {
  phoneOtpDestination.textContent = holderPhone.value;
  phoneOtpModal.hidden = false;
  document.body.classList.add("modal-open");
  resetOtpGroup(phoneOtpInputs, phoneOtpError);
}

function closePhoneOtp() {
  phoneOtpModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function completeRiskSubmission() {
  phoneOtpModal.hidden = true;
  const requestItem = requests.find((request) => request.request === currentGeneratedRequest.requestNumber);
  if (requestItem) {
    const now = getCurrentDateData();
    requestItem.stage = "RIESGOS";
    requestItem.status = "PENDIENTE";
    requestItem.date = now.date;
    requestItem.time = now.time;
    renderRequests();
  }
  currentGeneratedRequest.sentToRisk = true;
  currentGeneratedRequest.stage = "RIESGOS";
  currentGeneratedRequest.status = "PENDIENTE";
  saveCurrentWorkflow("solicitation");
  document.body.classList.remove("modal-open");
  showInbox();
}

function setupOtpGroup(group, error, onSuccess) {
  const inputs = Array.from(group.querySelectorAll("input"));
  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(-1);
      error.textContent = "";
      if (input.value && inputs[index + 1]) inputs[index + 1].focus();
      const code = inputs.map((item) => item.value).join("");
      if (code.length === 4) {
        if (code === "1234") onSuccess();
        else error.textContent = "Código incorrecto. Para este mock utiliza 1234.";
      }
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !input.value && inputs[index - 1]) inputs[index - 1].focus();
    });
  });
}

function startRiskSubmission() {
  if (!validateSolicitationForRisk()) return;
  const plaftObservation = findPlaftObservation();
  if (plaftObservation) {
    plaftDeniedMessage.textContent = `La persona ${plaftObservation.role} ${plaftObservation.name} cuenta con Observación PLAFT, subsanar para continuar.`;
    plaftDeniedModal.hidden = false;
    document.body.classList.add("modal-open");
    return;
  }
  openPhoneOtp();
}

function renderRequiredDocumentUploads() {
  const portfolio = resultPortfolio.textContent;
  const readOnly = isWorkflowReadOnly();
  const documentNames = Array.from(resultDocuments.querySelectorAll("li"), (item) => item.textContent.trim())
    .filter((name) => name && name !== "–");
  const uploads = currentGeneratedRequest.documentUploads || {};

  documentsPortfolioBadge.textContent = portfolio;
  documentsPortfolioBadge.classList.toggle("full", portfolio === "FULL");
  requiredDocumentUploads.replaceChildren();

  documentNames.forEach((documentName, index) => {
    const key = `document-${index}`;
    const files = uploads[key] || [];
    const item = document.createElement("details");
    item.className = "document-upload-item";
    if (files.length === 0) item.open = index === 0;

    const summary = document.createElement("summary");
    const title = document.createElement("strong");
    title.textContent = documentName;
    const status = document.createElement("span");
    status.className = files.length ? "document-status ready" : "document-status";
    status.textContent = files.length ? `${files.length} PDF${files.length === 1 ? "" : "s"}` : "Obligatorio: falta 1 PDF";
    summary.append(title, status);

    const body = document.createElement("div");
    body.className = "document-upload-body";
    const help = document.createElement("p");
    help.textContent = "Formato permitido: PDF. Debes adjuntar como mínimo 1 y como máximo 2 archivos.";
    const inputLabel = document.createElement("label");
    inputLabel.className = "document-file-picker";
    inputLabel.textContent = readOnly ? "Documentos en modo consulta" : (files.length >= 2 ? "Límite de 2 archivos alcanzado" : "＋ Seleccionar archivos");
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,application/pdf";
    input.multiple = true;
    input.required = files.length === 0;
    input.disabled = readOnly || files.length >= 2;
    input.dataset.documentKey = key;
    input.dataset.documentName = documentName;
    inputLabel.append(input);

    const list = document.createElement("div");
    list.className = "uploaded-document-list";
    files.forEach((fileName, fileIndex) => {
      const row = document.createElement("div");
      const name = document.createElement("span");
      name.textContent = `⇩ ${fileName}`;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Eliminar";
      remove.hidden = readOnly;
      remove.dataset.removeDocumentKey = key;
      remove.dataset.removeFileIndex = String(fileIndex);
      row.append(name, remove);
      list.append(row);
    });
    const error = document.createElement("small");
    error.className = "document-upload-error";
    error.dataset.documentError = key;
    body.append(help, inputLabel, list, error);
    item.append(summary, body);
    requiredDocumentUploads.append(item);
  });
}

function handleDocumentUpload(event) {
  const input = event.target.closest("input[type='file'][data-document-key]");
  if (!input) return;
  const key = input.dataset.documentKey;
  const existing = currentGeneratedRequest.documentUploads?.[key] || [];
  const selectedFiles = Array.from(input.files);
  const invalidFile = selectedFiles.find((file) => file.type !== "application/pdf" && !file.name.toLocaleLowerCase("es").endsWith(".pdf"));
  if (invalidFile) {
    const error = requiredDocumentUploads.querySelector(`[data-document-error="${key}"]`);
    error.textContent = "Solo se permiten archivos en formato PDF.";
    input.value = "";
    return;
  }
  const selected = selectedFiles.map((file) => file.name);
  if (existing.length + selected.length > 2) {
    const error = requiredDocumentUploads.querySelector(`[data-document-error="${key}"]`);
    error.textContent = "Solo puedes adjuntar un máximo de 2 archivos en este ítem.";
    input.value = "";
    return;
  }
  currentGeneratedRequest.documentUploads ||= {};
  currentGeneratedRequest.documentUploads[key] = [...existing, ...selected];
  renderRequiredDocumentUploads();
}

function removeUploadedDocument(event) {
  const button = event.target.closest("[data-remove-document-key]");
  if (!button) return;
  const files = currentGeneratedRequest.documentUploads?.[button.dataset.removeDocumentKey] || [];
  files.splice(Number(button.dataset.removeFileIndex), 1);
  renderRequiredDocumentUploads();
}

function solicitationFieldsComplete(fields) {
  return fields.every((field) => field.value.trim() !== "" && field.checkValidity());
}

function validateSolicitationEditFields(fields) {
  let firstInvalid = null;
  fields.forEach((field) => {
    const valid = field.value.trim() !== "" && field.checkValidity();
    field.classList.toggle("has-error", !valid);
    field.setAttribute("aria-invalid", String(!valid));
    if (!valid && !firstInvalid) firstInvalid = field;
  });
  if (firstInvalid) firstInvalid.focus();
  return !firstInvalid;
}

function updateSolicitationEditActions(fields, editing, editButton, cancelButton, saveButton, complete = solicitationFieldsComplete(fields)) {
  const effectiveEditing = editing || !complete;
  fields.forEach((field) => {
    field.disabled = !effectiveEditing;
    if (!effectiveEditing) {
      field.classList.remove("has-error");
      field.setAttribute("aria-invalid", "false");
    }
  });
  editButton.hidden = effectiveEditing;
  cancelButton.hidden = !effectiveEditing;
  saveButton.hidden = !effectiveEditing;
  return effectiveEditing;
}

function setPersonalEditing(editing, restore = false) {
  const fields = [holderBirthCountry, holderResidenceCountry, holderProfession, holderCivilStatus];
  if (editing) {
    currentGeneratedRequest.personalEditBackup = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  } else if (restore && currentGeneratedRequest.personalEditBackup) {
    fields.forEach((field) => { field.value = currentGeneratedRequest.personalEditBackup[field.id]; });
  }
  const effectiveEditing = updateSolicitationEditActions(fields, editing, editHolderPersonal, cancelHolderPersonal, saveHolderPersonal);
  if (effectiveEditing && !currentGeneratedRequest.personalEditBackup) {
    currentGeneratedRequest.personalEditBackup = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  }
  if (!effectiveEditing) currentGeneratedRequest.personalEditBackup = null;
}

function setContactEditing(editing, restore = false) {
  const editableFields = [holderPhone, holderEmail];
  if (editing) currentGeneratedRequest.contactEditBackup = Object.fromEntries(editableFields.map((field) => [field.id, field.value]));
  if (!editing && restore && currentGeneratedRequest.contactEditBackup) {
    editableFields.forEach((field) => { field.value = currentGeneratedRequest.contactEditBackup[field.id]; });
  }
  const effectiveEditing = updateSolicitationEditActions(editableFields, editing, editHolderContact, cancelHolderContact, saveHolderContact);
  if (effectiveEditing && !currentGeneratedRequest.contactEditBackup) {
    currentGeneratedRequest.contactEditBackup = Object.fromEntries(editableFields.map((field) => [field.id, field.value]));
  }
  if (!effectiveEditing) currentGeneratedRequest.contactEditBackup = null;
}

function setSpousePersonalEditing(editing, restore = false) {
  const fields = [spouseBirthCountry, spouseResidenceCountry, spouseProfession, spouseCivilStatus];
  if (editing) {
    currentGeneratedRequest.spousePersonalEditBackup = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  } else if (restore && currentGeneratedRequest.spousePersonalEditBackup) {
    fields.forEach((field) => { field.value = currentGeneratedRequest.spousePersonalEditBackup[field.id]; });
  }
  const effectiveEditing = updateSolicitationEditActions(fields, editing, editSpousePersonal, cancelSpousePersonal, saveSpousePersonal);
  if (effectiveEditing && !currentGeneratedRequest.spousePersonalEditBackup) {
    currentGeneratedRequest.spousePersonalEditBackup = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  }
  if (!effectiveEditing) currentGeneratedRequest.spousePersonalEditBackup = null;
}

function setSpouseContactEditing(editing, restore = false) {
  const fields = [spousePhone, spouseEmail];
  if (editing) {
    currentGeneratedRequest.spouseContactEditBackup = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  } else if (restore && currentGeneratedRequest.spouseContactEditBackup) {
    fields.forEach((field) => { field.value = currentGeneratedRequest.spouseContactEditBackup[field.id]; });
  }
  const effectiveEditing = updateSolicitationEditActions(fields, editing, editSpouseContact, cancelSpouseContact, saveSpouseContact);
  if (effectiveEditing && !currentGeneratedRequest.spouseContactEditBackup) {
    currentGeneratedRequest.spouseContactEditBackup = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  }
  if (!effectiveEditing) currentGeneratedRequest.spouseContactEditBackup = null;
}

function getAddressEditFields() {
  return [holderPropertyType, holderAddressYears, holderAddressMonths, holderDepartment,
    holderProvince, holderDistrict, holderAddress, holderAddressReference];
}

function getEmploymentEditFields() {
  return [employmentCategory, employerRuc, workplaceName, workplaceAddress, employmentActivity,
    employmentPosition, employmentStartDate, employmentCurrency, monthlyNetIncome];
}

function employmentFieldsComplete() {
  const requiredFields = [employmentCategory, workplaceName, workplaceAddress, employmentActivity,
    employmentPosition, employmentStartDate, employmentCurrency, monthlyNetIncome];
  return solicitationFieldsComplete(requiredFields)
    && parseMoney(monthlyNetIncome.value) > 0
    && (employerRuc.value === "" || employerRuc.checkValidity());
}

function validateEmploymentEditFields() {
  const requiredFields = [employmentCategory, workplaceName, workplaceAddress, employmentActivity,
    employmentPosition, employmentStartDate, employmentCurrency, monthlyNetIncome];
  const requiredValid = validateSolicitationEditFields(requiredFields);
  const monthlyValid = parseMoney(monthlyNetIncome.value) > 0;
  monthlyNetIncome.classList.toggle("has-error", !monthlyValid);
  monthlyNetIncome.setAttribute("aria-invalid", String(!monthlyValid));
  const rucValid = employerRuc.value === "" || employerRuc.checkValidity();
  employerRuc.classList.toggle("has-error", !rucValid);
  employerRuc.setAttribute("aria-invalid", String(!rucValid));
  if (requiredValid && !monthlyValid) monthlyNetIncome.focus();
  else if (requiredValid && monthlyValid && !rucValid) employerRuc.focus();
  return requiredValid && monthlyValid && rucValid;
}

function getVehicleEditFields() {
  const fields = [vehicleSellerDocumentType, vehicleSellerDocument, vehicleSellerName,
    solicitationVehicleBrand, solicitationVehicleModel, solicitationVehicleYear, vehicleOwnership];
  if (vehicleOwnership.value === "Tercero") {
    fields.push(vehicleThirdPartyNames, vehicleThirdPartyPaternalSurname, vehicleThirdPartyMaternalSurname);
  }
  if (isEFE004PostApprovalStage()) fields.push(vehicleColor, vehicleType, vehicleVin, vehicleEngineNumber);
  return fields;
}

function setAddressEditing(editing, restore = false) {
  const fields = getAddressEditFields();
  const backupKey = "addressEditBackup";
  if (editing) currentGeneratedRequest[backupKey] = {
    ...Object.fromEntries(fields.map((field) => [field.id, field.value])),
    __validated: Boolean(currentGeneratedRequest.addressValidated),
  };
  if (!editing && restore && currentGeneratedRequest[backupKey]) {
    fields.forEach((field) => { field.value = currentGeneratedRequest[backupKey][field.id]; });
    currentGeneratedRequest.addressValidated = Boolean(currentGeneratedRequest[backupKey].__validated);
    addressValidationStatus.textContent = currentGeneratedRequest.addressValidated ? "Validada" : "Por confirmar";
    addressValidationStatus.classList.toggle("validated", currentGeneratedRequest.addressValidated);
  }
  const effectiveEditing = updateSolicitationEditActions(fields, editing, editHolderAddress, cancelHolderAddress, saveHolderAddress);
  if (effectiveEditing && !currentGeneratedRequest[backupKey]) {
    currentGeneratedRequest[backupKey] = {
      ...Object.fromEntries(fields.map((field) => [field.id, field.value])),
      __validated: Boolean(currentGeneratedRequest.addressValidated),
    };
  }
  if (!effectiveEditing) currentGeneratedRequest[backupKey] = null;
  validateAddressButton.disabled = effectiveEditing || !solicitationFieldsComplete(fields);
}

function setEmploymentEditing(editing, restore = false) {
  const fields = getEmploymentEditFields();
  const backupKey = "employmentEditBackup";
  if (editing) currentGeneratedRequest[backupKey] = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  if (!editing && restore && currentGeneratedRequest[backupKey]) {
    fields.forEach((field) => { field.value = currentGeneratedRequest[backupKey][field.id]; });
  }
  const effectiveEditing = updateSolicitationEditActions(fields, editing, editHolderEmployment,
    cancelHolderEmployment, saveHolderEmployment, employmentFieldsComplete());
  if (effectiveEditing && !currentGeneratedRequest[backupKey]) {
    currentGeneratedRequest[backupKey] = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  }
  if (!effectiveEditing) currentGeneratedRequest[backupKey] = null;
}

function setVehicleEditing(editing, restore = false) {
  const fields = getVehicleEditFields();
  const backupKey = "vehicleEditBackup";
  if (editing) currentGeneratedRequest[backupKey] = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  if (!editing && restore && currentGeneratedRequest[backupKey]) {
    fields.forEach((field) => {
      if (Object.hasOwn(currentGeneratedRequest[backupKey], field.id)) field.value = currentGeneratedRequest[backupKey][field.id];
    });
    syncThirdPartyOwnershipFields();
  }
  const effectiveEditing = updateSolicitationEditActions(fields, editing, editVehicleData,
    cancelVehicleData, saveVehicleData);
  if (effectiveEditing && !currentGeneratedRequest[backupKey]) {
    currentGeneratedRequest[backupKey] = Object.fromEntries(fields.map((field) => [field.id, field.value]));
  }
  if (!effectiveEditing) currentGeneratedRequest[backupKey] = null;
}

function updateSolicitationAccordionStatuses() {
  const requiredHolderFields = [
    holderCivilStatus,
    holderBirthCountry,
    holderResidenceCountry,
    holderProfession,
    holderPhone,
    holderEmail,
    holderPropertyType,
    holderAddressYears,
    holderAddressMonths,
    holderDepartment,
    holderProvince,
    holderDistrict,
    holderAddress,
    holderAddressReference,
    employmentCategory,
    workplaceName,
    workplaceAddress,
    employmentActivity,
    employmentPosition,
    employmentStartDate,
    employmentCurrency,
    monthlyNetIncome,
  ];
  const complete = requiredHolderFields.every((field) => field.value.trim() !== "" && field.checkValidity())
    && parseMoney(monthlyNetIncome.value) > 0
    && (employerRuc.value === "" || employerRuc.checkValidity());
  const addressFields = [holderPropertyType, holderAddressYears, holderAddressMonths, holderDepartment,
    holderProvince, holderDistrict, holderAddress, holderAddressReference];
  const addressComplete = addressFields.every((field) => field.value.trim() !== "" && field.checkValidity());
  validateAddressButton.disabled = !addressComplete || !saveHolderAddress.hidden;
  holderAccordionStatus.textContent = complete ? "Completo" : "Sin completar";
  holderAccordionStatus.classList.toggle("complete", complete);

  const spouseRequiredFields = [spouseCivilStatus, spouseBirthCountry, spouseResidenceCountry,
    spouseProfession, spousePhone, spouseEmail];
  const spouseComplete = currentGeneratedRequest.hasSpouse
    && Boolean(currentGeneratedRequest.spouseDocument)
    && spouseRequiredFields.every((field) => field.value.trim() !== "" && field.checkValidity());
  spouseAccordionStatus.textContent = spouseComplete ? "Completo" : "Sin completar";
  spouseAccordionStatus.classList.toggle("complete", spouseComplete);

  const requiredVehicleFields = [
    solicitationVehicleCondition,
    solicitationVehicleDealer,
    solicitationVehicleBranch,
    vehicleSellerDocumentType,
    vehicleSellerDocument,
    vehicleSellerName,
    solicitationVehicleBrand,
    solicitationVehicleModel,
    solicitationVehicleYear,
    vehicleOwnership,
  ];
  if (isEFE004PostApprovalStage()) {
    requiredVehicleFields.push(vehicleColor, vehicleType, vehicleVin, vehicleEngineNumber);
  }
  if (vehicleOwnership.value === "Tercero") {
    requiredVehicleFields.push(vehicleThirdPartyNames, vehicleThirdPartyPaternalSurname, vehicleThirdPartyMaternalSurname);
  }
  const vehicleComplete = requiredVehicleFields.every((field) => field.value.trim() !== "" && field.checkValidity());
  vehicleAccordionStatus.textContent = vehicleComplete ? "Completo" : "Sin completar";
  vehicleAccordionStatus.classList.toggle("complete", vehicleComplete);
  generateGuaranteeButton.disabled = !isEFE004DocumentaryPending() || !vehicleComplete || Boolean(currentGeneratedRequest.guaranteeGenerated);
}

function validateAndSendToOperations() {
  const downloaded = new Set(currentGeneratedRequest.downloadedPostApprovalDocuments || []);
  const allDownloaded = postApprovalDocumentNames.every((name) => downloaded.has(name));
  const checklistFiles = currentGeneratedRequest.checklistTwoFiles || {};
  const hasChecklistDocument = checklistTwoRequirements
    .filter((requirement) => requirement.required)
    .every((requirement) => (checklistFiles[requirement.key] || []).length >= 1
      && (checklistFiles[requirement.key] || []).length <= 2);
  postApprovalDocumentsCard.classList.toggle("submission-error-highlight", !allDownloaded);
  checklistTwoCard.classList.toggle("submission-error-highlight", !hasChecklistDocument);
  if (!allDownloaded || !hasChecklistDocument) {
    incompleteSolicitationMessage.textContent = !allDownloaded && !hasChecklistDocument
      ? "Descarga todos los documentos de Post Aprobación y adjunta entre 1 y 2 PDF en cada ítem obligatorio del CheckList 2 para continuar."
      : !allDownloaded
        ? "Descarga todos los documentos de Post Aprobación para continuar."
        : "Adjunta entre 1 y 2 archivos PDF en cada ítem obligatorio del CheckList 2 para continuar.";
    incompleteSolicitationModal.hidden = false;
    document.body.classList.add("modal-open");
    return;
  }
  const requestItem = requests.find((request) => request.request === "EFE004");
  const now = getCurrentDateData();
  if (requestItem) {
    requestItem.stage = "OPERACIONES";
    requestItem.status = "PENDIENTE";
    requestItem.date = now.date;
    requestItem.time = now.time;
  }
  currentGeneratedRequest.stage = "OPERACIONES";
  currentGeneratedRequest.status = "PENDIENTE";
  currentGeneratedRequest.dateData = now;
  saveCurrentWorkflow("solicitation");
  renderRequests();
  showInbox();
}

function showSolicitationScreen() {
  if (calculationResultCard.hidden) return;
  const resetSolicitationView = Boolean(currentGeneratedRequest.solicitationNavigationLocked);
  currentGeneratedRequest.solicitationStarted = true;
  currentGeneratedRequest.solicitationNavigationLocked = false;
  saveCurrentWorkflow("solicitation");
  const requestItem = requests.find((request) => request.request === currentGeneratedRequest.requestNumber);
  if (requestItem && !isWorkflowReadOnly()) {
    requestItem.stage = "SOLICITUD";
    requestItem.status = "PENDIENTE";
    renderRequests();
  }
  populateSolicitationScreen();
  if (resetSolicitationView) {
    solicitationView.querySelectorAll(".solicitation-accordion-content").forEach((content) => { content.hidden = true; });
    solicitationView.querySelectorAll(".solicitation-accordion-toggle").forEach((button) => button.setAttribute("aria-expanded", "false"));
  }
  clearToasts();
  resultView.hidden = true;
  calculationView.hidden = true;
  solicitationView.hidden = false;
  applyReadOnlyWorkflowMode();
  document.title = `EfectiBank | Solicitud ${currentGeneratedRequest.requestNumber}`;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function toggleSolicitationAccordion(event) {
  const button = event.target.closest(".solicitation-accordion-toggle");
  if (!button) return;
  const content = button.nextElementSibling;
  const open = content.hidden;
  content.hidden = !open;
  button.setAttribute("aria-expanded", String(open));
  if (open && button.dataset.accordion === "vehicle") {
    const service = "Obtener concesionario Marca - Modelo (ODM)";
    showServiceToasts([service], [service]);
  }
}

function showFinancingToasts() {
  const services = [
    "MallaLineaProductosVehicular",
    "ObtenerMontofinanciar",
    "ObtenerDiasSegurosDiaPago",
  ];
  showServiceToasts(services, ["MallaLineaProductosVehicular"]);
}

function setCalculationFieldValidity(field, isValid, showErrors) {
  if (isValid) {
    field.classList.remove("has-error");
    field.setAttribute("aria-invalid", "false");
  } else if (showErrors) {
    field.classList.add("has-error");
    field.setAttribute("aria-invalid", "true");
  }
}

function validateCalculationRequirements(showErrors = false) {
  const annualPercentageVisible = !annualVehicleInsuranceField.hidden;
  const annualPercentage = annualVehicleInsurancePercentage.value.trim();
  const annualPercentageNumber = parseMoney(annualPercentage);
  const validations = [
    [initialPayment, parseMoney(initialPayment.value) > 0 && parseMoney(initialPayment.value) < parseMoney(calculationVehiclePrice.value)],
    [exchangeRate, parseMoney(exchangeRate.value) > 0],
    [selectedTerm, selectedTerm.value !== ""],
    [annualVehicleInsurancePercentage, !annualPercentageVisible || (annualPercentage !== "" && Number.isFinite(annualPercentageNumber) && annualPercentageNumber >= 0 && annualPercentageNumber <= 100)],
  ];

  if (!incomeDetailPanel.hidden) {
    const visibleIncomeEntries = [
      ...holderIncomeRows.querySelectorAll(".income-entry"),
      ...(spouseIncomeSection.hidden ? [] : spouseIncomeRows.querySelectorAll(".income-entry")),
    ];

    visibleIncomeEntries.forEach((entry) => {
      const category = entry.querySelector('[data-field="category"]');
      const profile = entry.querySelector('[data-field="profile"]');
      const situation = entry.querySelector('[data-field="situation"]');
      const startDate = entry.querySelector('[data-field="startDate"]');
      const monthlyIncome = entry.querySelector('[data-field="monthlyIncome"]');
      const annualized = entry.querySelector('[data-field="annualized"]');
      validations.push(
        [category, category.value !== ""],
        [profile, profile.value !== ""],
        [situation, situation.value !== ""],
        [startDate, startDate.value !== ""],
        [monthlyIncome, parseMoney(monthlyIncome.value) > 0],
        [annualized, annualized.value !== ""],
      );
    });
  }

  validations.forEach(([field, isValid]) => setCalculationFieldValidity(field, isValid, showErrors));
  if (showErrors) {
    const firstInvalid = validations.find(([, isValid]) => !isValid);
    if (firstInvalid) firstInvalid[0].focus();
  }
  return validations.every(([, isValid]) => isValid);
}

function updateCalculateAvailability() {
  calculationValidationMessage.textContent = "";
  const isReady = validateCalculationRequirements(false);
  calculateButton.classList.toggle("is-pending", !isReady);
  calculateButton.setAttribute("aria-disabled", String(!isReady));
}

function syncVehicleInsuranceFields() {
  annualVehicleInsuranceField.hidden = vehicleInsuranceType.value === "endosado";
  updateCalculateAvailability();
}

function syncCreditLifeInsuranceFields() {
  creditLifeInsuranceTypeField.hidden = creditLifeInsurance.value !== "con_seguro";
}

function syncGpsFields() {
  const withoutGps = gpsOption.value === "sin_gps";
  gpsTypeField.hidden = withoutGps;
  updateCalculateAvailability();
}

function syncDoubleInstallmentFields() {
  doubleInstallmentMonthsField.hidden = doubleInstallments.value !== "Si";
}

function syncEmploymentPositionLabel() {
  employmentPositionLabel.textContent = employmentCategory.value === "Independiente"
    ? "Situación laboral"
    : "Cargo";
}

function syncVehicleOwnershipOptions(selectedValue = vehicleOwnership.value) {
  const hasSpouse = Boolean(currentGeneratedRequest?.hasSpouse);
  const jointOwnershipValue = "Titular + Conyugue";
  let spouseOption = Array.from(vehicleOwnership.options)
    .find((option) => option.value === jointOwnershipValue || option.value === "Conyugue");
  if (hasSpouse && !spouseOption) {
    const option = document.createElement("option");
    option.value = jointOwnershipValue;
    option.textContent = jointOwnershipValue;
    const thirdPartyOption = Array.from(vehicleOwnership.options).find((item) => item.value === "Tercero");
    vehicleOwnership.insertBefore(option, thirdPartyOption || null);
    spouseOption = option;
  } else if (hasSpouse && spouseOption) {
    spouseOption.value = jointOwnershipValue;
    spouseOption.textContent = jointOwnershipValue;
  } else if (!hasSpouse && spouseOption) {
    spouseOption.remove();
  }
  const normalizedValue = selectedValue === "Conyugue" ? jointOwnershipValue : selectedValue;
  vehicleOwnership.value = normalizedValue === jointOwnershipValue && !hasSpouse ? "" : normalizedValue;
}

function syncThirdPartyOwnershipFields() {
  const isThirdParty = vehicleOwnership.value === "Tercero";
  vehicleThirdPartyFields.forEach((field) => { field.hidden = !isThirdParty; });
}

function sanitizeTwoDecimalInput(event) {
  const cleaned = event.target.value.replace(/[^\d.]/g, "");
  const [integerPart = "", ...decimalParts] = cleaned.split(".");
  const decimals = decimalParts.join("").slice(0, 2);
  event.target.value = cleaned.includes(".") ? `${integerPart}.${decimals}` : integerPart;
}

function formatTwoDecimalInput(event) {
  if (event.target.value === "") return;
  const value = Number(event.target.value);
  event.target.value = Number.isFinite(value) ? value.toFixed(2) : "";
}

function unformatAnnualVehicleInsurance() {
  const currentValue = annualVehicleInsurancePercentage.value.trim();
  annualVehicleInsurancePercentage.value = currentValue === ""
    ? ""
    : parseMoney(currentValue).toFixed(2);
}

function formatAnnualVehicleInsurance() {
  const currentValue = annualVehicleInsurancePercentage.value.trim();
  if (currentValue === "") return;
  annualVehicleInsurancePercentage.value = `${parseMoney(currentValue).toFixed(2)} %`;
  updateCalculateAvailability();
}

function blurOnEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.blur();
  }
}

function openSuccessModal() {
  successModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeSuccessModal() {
  successModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function getHolderAddressQuery() {
  return [holderAddress.value, holderDistrict.value, holderProvince.value, holderDepartment.value, "Perú"]
    .filter(Boolean)
    .join(", ");
}

function openAddressMapModal() {
  if (validateAddressButton.disabled) return;
  const address = getHolderAddressQuery();
  showServiceToasts(["Normalización", "POLIGNOS"]);
  addressMapText.textContent = address;
  addressMapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  addressMapModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeAddressMapModal() {
  addressMapModal.hidden = true;
  addressMapFrame.src = "about:blank";
  if (addressValidationSuccessModal.hidden) document.body.classList.remove("modal-open");
}

function confirmHolderAddress() {
  const hasAddressAlert = Boolean(currentGeneratedRequest?.person?.addressAlert);
  currentGeneratedRequest.addressValidated = true;
  currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
  addressValidationStatus.textContent = "Validada";
  addressValidationStatus.classList.add("validated");
  addressMapModal.hidden = true;
  addressMapFrame.src = "about:blank";
  addressValidationSuccessModal.querySelector(".address-validation-success")
    ?.classList.toggle("has-address-observation", hasAddressAlert);
  addressValidationResultIcon.textContent = hasAddressAlert ? "!" : "✓";
  addressValidationResultTitle.textContent = hasAddressAlert ? "Observación" : "Dirección válida";
  addressValidationResultMessage.textContent = hasAddressAlert
    ? "Zona peligrosa detectada\nrequiere autorización de producto para continuar"
    : "La dirección domiciliaria fue validada correctamente.";

  if (hasAddressAlert) {
    const currentObservations = currentGeneratedRequest.observations || [];
    const addressRiskCodes = new Set(addressRiskObservations.map((observation) => observation.code));
    const otherObservations = currentObservations.filter((observation) => !addressRiskCodes.has(observation.code));
    const updatedObservations = [
      ...otherObservations,
      ...addressRiskObservations.map((observation) => ({ ...observation })),
    ];
    currentGeneratedRequest.observations = updatedObservations;
    pendingSimulationObservations = [...updatedObservations];
    renderWorkflowObservations(updatedObservations);
  }

  addressValidationSuccessModal.hidden = false;
}

function closeAddressValidationSuccess() {
  addressValidationSuccessModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function invalidateAddressValidation() {
  if (!currentGeneratedRequest) return;
  currentGeneratedRequest.addressValidated = false;
  addressValidationStatus.textContent = "Por confirmar";
  addressValidationStatus.classList.remove("validated");
  updateSolicitationAccordionStatuses();
}

function finalizeSimulation(person) {
  const dateData = getCurrentDateData();
  const requestNumber = generateRequestNumber(dateData.year);
  const fullName = `${person.names} ${person.paternalSurname} ${person.maternalSurname}`;
  const workflow = {
    requestNumber,
    dateData,
    document: clientDocument.value,
    vehiclePrice: vehiclePrice.value,
    phone: clientPhone.value,
    dealer: dealerSelect.value,
    branch: simulationBranchSelect.value,
    hasSpouse: spouseLoaded,
    spouseDocument: spouseDocument.value,
    spousePerson: spouseLoaded ? { ...defaultSpousePerson } : null,
    person: { ...person },
    simulationPerson: { ...person },
    observations: [...pendingSimulationObservations],
    comments: [],
    lastScreen: "result",
    calculationUnlocked: false,
  };
  const requestItem = {
    request: requestNumber,
    document: clientDocument.value,
    name: fullName,
    branch: simulationBranchSelect.value,
    date: dateData.date,
    time: dateData.time,
    stage: "SIMULACIÓN",
    status: "PENDIENTE",
    workflow,
  };

  currentGeneratedRequest = workflow;
  renderWorkflowObservations(workflow.observations);
  calculationUnlocked = false;
  resetCalculationControls();
  resetDeclaredIncomes(workflow.hasSpouse);
  saveCurrentWorkflow("result");
  requests.unshift(requestItem);
  renderRequests();
  resultCalculationTab.disabled = true;
  resultCalculationTab.setAttribute("aria-disabled", "true");
  populateResultScreen(requestNumber, person, dateData);
  simulationView.hidden = true;
  resultView.hidden = false;
  document.title = `EfectiBank | Solicitud ${requestNumber}`;
  window.scrollTo({ top: 0, behavior: "auto" });
  showConfirmationToasts(true);
  openSuccessModal();
}

function confirmSimulation() {
  simulationMessage.classList.remove("is-error");
  clearToasts();

  if (!validateSimulationForm()) {
    simulationMessage.textContent = "Completa o corrige los campos resaltados.";
    simulationMessage.classList.add("is-error");
    return;
  }

  showConfirmationToasts();
  const documentNumber = clientDocument.value;
  const mockPerson = personMocks[documentNumber];
  pendingSimulationObservations = getWorkflowObservations(documentNumber);
  renderWorkflowObservations();

  if (resolvedDocument !== documentNumber) {
    resolvedDocument = documentNumber;

    if (mockPerson) {
      resetManualPersonForm();
      setSpouseRequirement(true);
      simulationMessage.textContent = "";
      return;
    } else {
      resetManualPersonForm();
      manualPersonForm.hidden = false;
      setManualPersonEditing(true);
      setSpouseRequirement(true);
      simulationMessage.textContent =
        "No se encontraron datos. Completa el formulario de la persona.";
      simulationMessage.classList.add("is-error");
      clientNames.focus();
      return;
    }
  }

  if (!manualPersonForm.hidden && !manualPersonSaved) {
    simulationMessage.textContent = "Guarda los datos de la persona antes de continuar.";
    simulationMessage.classList.add("is-error");
    return;
  }

  const person = mockPerson || getManualPersonData();
  setSpouseRequirement(true);

  finalizeSimulation(person);
}

function showInbox() {
  if (currentGeneratedRequest) {
    const activeScreen = isWorkflowReadOnly()
      ? "solicitation"
      : !solicitationView.hidden
      ? "solicitation"
      : calculationView.hidden ? "result" : "calculation";
    saveCurrentWorkflow(activeScreen);
  }
  clearReadOnlyWorkflowMode();
  closeSuccessModal();
  resetSimulation();
  clearToasts();
  simulationView.hidden = true;
  resultView.hidden = true;
  calculationView.hidden = true;
  solicitationView.hidden = true;
  calculationUnlocked = false;
  currentGeneratedRequest = null;
  resultCalculationTab.disabled = true;
  resultCalculationTab.setAttribute("aria-disabled", "true");
  inboxHeader.hidden = false;
  inboxView.hidden = false;
  document.title = "EfectiBank | Bandeja de Entrada";
  window.scrollTo({ top: 0, behavior: "auto" });
}

function openSpouseModal() {
  spouseError.textContent = "";
  spouseModal.hidden = false;
  document.body.classList.add("modal-open");
  window.requestAnimationFrame(() => spouseDocument.focus());
}

function closeSpouseModal() {
  spouseModal.hidden = true;
  document.body.classList.remove("modal-open");
  spouseError.textContent = "";
}

function renderSpouse(documentNumber) {
  spouseLoaded = true;
  spouseCard.classList.remove("has-error");
  spouseContent.replaceChildren();

  const record = document.createElement("div");
  record.className = "spouse-record";

  const recordCopy = document.createElement("p");
  recordCopy.textContent = "DNI";

  const documentCopy = document.createElement("span");
  documentCopy.textContent = documentNumber;
  recordCopy.append(documentCopy);

  const removeButton = document.createElement("button");
  removeButton.className = "remove-spouse-button";
  removeButton.type = "button";
  removeButton.textContent = "Quitar";
  removeButton.addEventListener("click", () => {
    resetSpouseContent();
  });

  record.append(recordCopy, removeButton);
  spouseContent.append(record);
}

function filterSpouse() {
  const documentNumber = spouseDocument.value.trim();

  if (!/^\d{8}$/.test(documentNumber)) {
    spouseError.textContent = "Ingresa un DNI de 8 dígitos.";
    spouseDocument.focus();
    return;
  }

  renderSpouse(documentNumber);
  closeSpouseModal();
  showConfirmationToasts();
  simulationMessage.textContent =
    "Datos del conyugue registrados. Pulsa Confirmar para continuar.";
  simulationMessage.classList.remove("is-error");
}

function keepOnlyDigits(event) {
  const digits = event.target.value.replace(/\D/g, "");
  const limit = event.target.maxLength;
  event.target.value = limit > 0 ? digits.slice(0, limit) : digits;
}

function formatPhoneInput(event) {
  const digits = event.target.value.replace(/\D/g, "").slice(0, 9);
  event.target.value = digits && digits.charAt(0) !== "9" ? "" : digits;
}

function sanitizePriceInput() {
  const cleaned = vehiclePrice.value.replace(/[^\d.]/g, "");

  if (cleaned === "") {
    vehiclePrice.value = "";
    return;
  }

  const [integerPart = "", ...decimalParts] = cleaned.split(".");
  const hasDecimalPoint = cleaned.includes(".");
  const decimals = decimalParts.join("").slice(0, 2);
  const normalizedInteger = integerPart.replace(/^0+(?=\d)/, "") || "0";

  vehiclePrice.value = hasDecimalPoint
    ? `${normalizedInteger}.${decimals}`
    : normalizedInteger;
}

function getVehiclePriceNumber() {
  const numericValue = vehiclePrice.value
    .replace("$", "")
    .replace(/,/g, "")
    .trim();
  return numericValue === "" ? Number.NaN : Number(numericValue);
}

function formatVehiclePrice() {
  const price = getVehiclePriceNumber();

  if (!Number.isFinite(price)) {
    vehiclePrice.value = "";
    return;
  }

  vehiclePrice.value = `$ ${price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function unformatVehiclePrice() {
  const price = getVehiclePriceNumber();
  vehiclePrice.value = Number.isFinite(price) ? price.toFixed(2) : "";
}

function setFieldValidity(field, isValid) {
  field.classList[isValid ? "remove" : "add"]("has-error");
  field.setAttribute("aria-invalid", isValid ? "false" : "true");
}

function validateSimulationForm() {
  const price = getVehiclePriceNumber();
  const validations = [
    [dealerSelect, dealerSelect.value !== ""],
    [simulationBranchSelect, simulationBranchSelect.value !== ""],
    [clientDocument, /^\d{8}$/.test(clientDocument.value)],
    [clientPhone, clientPhone.value === "" || /^9\d{8}$/.test(clientPhone.value)],
    [vehiclePrice, Number.isFinite(price) && price > 0],
  ];

  validations.forEach(([field, isValid]) => setFieldValidity(field, isValid));
  const firstInvalid = validations.find(([, isValid]) => !isValid);

  if (firstInvalid) firstInvalid[0].focus();
  return !firstInvalid;
}

function validateManualPersonForm() {
  const validations = [
    [clientNames, clientNames.value.trim() !== ""],
    [paternalSurname, paternalSurname.value.trim() !== ""],
    [maternalSurname, maternalSurname.value.trim() !== ""],
    [civilStatus, civilStatus.value !== ""],
    [birthDate, birthDate.value !== ""],
  ];

  validations.forEach(([field, isValid]) => setFieldValidity(field, isValid));
  const firstInvalid = validations.find(([, isValid]) => !isValid);

  if (firstInvalid) firstInvalid[0].focus();
  return !firstInvalid;
}

function clearFieldValidation(event) {
  event.target.classList.remove("has-error");
  event.target.setAttribute("aria-invalid", "false");
}

filtersForm.addEventListener("input", renderRequests);
filtersForm.addEventListener("change", renderRequests);
filtersForm.addEventListener("reset", () => {
  window.requestAnimationFrame(renderRequests);
});
requestsBody.addEventListener("click", (event) => {
  const reviewButton = event.target.closest(".review-button");
  if (reviewButton) reviewRequest(reviewButton.dataset.requestId);
});

newRequestButton.addEventListener("click", showSimulation);
backToInboxButton.addEventListener("click", showInbox);
addSpouseButton.addEventListener("click", openSpouseModal);
closeSpouseModalButton.addEventListener("click", closeSpouseModal);
cancelSpouseButton.addEventListener("click", closeSpouseModal);
filterSpouseButton.addEventListener("click", filterSpouse);
clientDocument.addEventListener("input", keepOnlyDigits);
clientDocument.addEventListener("input", resetResolvedPerson);
clientPhone.addEventListener("input", formatPhoneInput);
spouseDocument.addEventListener("input", keepOnlyDigits);
vehiclePrice.addEventListener("input", sanitizePriceInput);
vehiclePrice.addEventListener("focus", unformatVehiclePrice);
vehiclePrice.addEventListener("blur", formatVehiclePrice);
vehiclePrice.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  formatVehiclePrice();
});
confirmSimulationButton.addEventListener("click", confirmSimulation);
saveManualPerson.addEventListener("click", saveManualPersonData);
editManualPerson.addEventListener("click", () => {
  setManualPersonEditing(true);
  simulationMessage.textContent = "Edita los datos y pulsa Guardar para continuar.";
  simulationMessage.classList.remove("is-error");
  clientNames.focus();
});
simulationForm.addEventListener("keydown", (event) => {
  if (event.key === "Enter") event.preventDefault();
});
simulationConsentLink.addEventListener("click", () => {
  simulationConsentModal.hidden = false;
  document.body.classList.add("modal-open");
  closeSimulationConsentModalButton.focus();
});
closeSimulationConsentModalButton.addEventListener("click", () => {
  simulationConsentModal.hidden = true;
  document.body.classList.remove("modal-open");
  simulationConsentLink.focus();
});
simulationConsentModal.addEventListener("click", (event) => {
  if (event.target !== simulationConsentModal) return;
  simulationConsentModal.hidden = true;
  document.body.classList.remove("modal-open");
  simulationConsentLink.focus();
});
resultBackButton.addEventListener("click", showInbox);
resultCalculationTab.addEventListener("click", showCalculationScreen);
resultNextButton.addEventListener("click", unlockAndShowCalculation);
calculationPreliminaryTab.addEventListener("click", showResultScreen);
calculationBackButton.addEventListener("click", () => {
  if (isWorkflowReadOnly()) showInbox();
  else showResultScreen();
});
initialPayment.addEventListener("input", sanitizeTwoDecimalInput);
initialPayment.addEventListener("input", updateInitialPaymentPercentage);
initialPayment.addEventListener("input", updateCalculateAvailability);
initialPayment.addEventListener("focus", unformatInitialPayment);
initialPayment.addEventListener("blur", formatInitialPayment);
initialPayment.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    initialPayment.blur();
  }
});
exchangeRate.addEventListener("input", sanitizeTwoDecimalInput);
exchangeRate.addEventListener("input", updateCalculateAvailability);
selectedTerm.addEventListener("change", updateCalculateAvailability);
calculateButton.addEventListener("click", calculateFinancing);
simulateButton.addEventListener("click", () => renderCalculationResult());
continueRequestButton.addEventListener("click", () => {
  if (continueRequestButton.disabled) return;
  creditPrivacyModal.hidden = false;
  document.body.classList.add("modal-open");
  closeCreditPrivacyModalButton.focus();
});
function closeCreditPrivacyAndContinue() {
  creditPrivacyModal.hidden = true;
  document.body.classList.remove("modal-open");
  showSolicitationScreen();
}
closeCreditPrivacyModalButton.addEventListener("click", closeCreditPrivacyAndContinue);
creditPrivacyModal.addEventListener("click", (event) => {
  if (event.target === creditPrivacyModal) closeCreditPrivacyAndContinue();
});
calculationSolicitationStageButton.addEventListener("click", showSolicitationScreen);
solicitationSimulationStageButton.addEventListener("click", returnToSimulationFromSolicitation);
solicitationBackButton.addEventListener("click", () => {
  if (isWorkflowReadOnly()) showInbox();
  else returnToSimulationFromSolicitation();
});
solicitationView.addEventListener("click", toggleSolicitationAccordion);
requiredDocumentUploads.addEventListener("change", handleDocumentUpload);
requiredDocumentUploads.addEventListener("click", removeUploadedDocument);
solicitationComment.addEventListener("input", () => {
  solicitationCommentCount.textContent = String(solicitationComment.value.length);
  solicitationCommentError.textContent = "";
});
cancelSolicitationComment.addEventListener("click", resetSolicitationCommentEditor);
saveSolicitationComment.addEventListener("click", saveCurrentSolicitationComment);
sendToRiskButton.addEventListener("click", startRiskSubmission);
sendToOperationsButton.addEventListener("click", validateAndSendToOperations);
closePlaftDeniedModal.addEventListener("click", closePlaftModal);
acceptPlaftDenied.addEventListener("click", closePlaftModal);
closeIncompleteSolicitationModal.addEventListener("click", closeIncompleteSolicitationPopup);
acceptIncompleteSolicitation.addEventListener("click", closeIncompleteSolicitationPopup);
closePhoneOtpModal.addEventListener("click", closePhoneOtp);
acceptRiskSubmission.addEventListener("click", () => {
  riskSubmissionSuccessModal.hidden = true;
  document.body.classList.remove("modal-open");
  showInbox();
});
setupOtpGroup(phoneOtpInputs, phoneOtpError, completeRiskSubmission);
editHolderPersonal.addEventListener("click", () => setPersonalEditing(true));
cancelHolderPersonal.addEventListener("click", () => {
  setPersonalEditing(false, true);
  updateSolicitationAccordionStatuses();
});
saveHolderPersonal.addEventListener("click", () => {
  const fields = [holderBirthCountry, holderResidenceCountry, holderProfession, holderCivilStatus];
  if (!validateSolicitationEditFields(fields)) return;
  currentGeneratedRequest.person.civilStatus = holderCivilStatus.value;
  syncVehicleOwnershipOptions(vehicleOwnership.value);
  syncThirdPartyOwnershipFields();
  setPersonalEditing(false);
  currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
  updateSolicitationAccordionStatuses();
});
editHolderContact.addEventListener("click", () => setContactEditing(true));
cancelHolderContact.addEventListener("click", () => {
  setContactEditing(false, true);
  updateSolicitationAccordionStatuses();
});
saveHolderContact.addEventListener("click", () => {
  if (!validateSolicitationEditFields([holderPhone, holderEmail])) return;
  setContactEditing(false);
  currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
  updateSolicitationAccordionStatuses();
});
holderPhone.addEventListener("input", formatPhoneInput);
editSpousePersonal.addEventListener("click", () => setSpousePersonalEditing(true));
cancelSpousePersonal.addEventListener("click", () => {
  setSpousePersonalEditing(false, true);
  updateSolicitationAccordionStatuses();
});
saveSpousePersonal.addEventListener("click", () => {
  const fields = [spouseBirthCountry, spouseResidenceCountry, spouseProfession, spouseCivilStatus];
  if (!validateSolicitationEditFields(fields)) return;
  currentGeneratedRequest.spousePerson.civilStatus = spouseCivilStatus.value;
  setSpousePersonalEditing(false);
  currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
  updateSolicitationAccordionStatuses();
});
editSpouseContact.addEventListener("click", () => setSpouseContactEditing(true));
cancelSpouseContact.addEventListener("click", () => {
  setSpouseContactEditing(false, true);
  updateSolicitationAccordionStatuses();
});
saveSpouseContact.addEventListener("click", () => {
  if (!validateSolicitationEditFields([spousePhone, spouseEmail])) return;
  setSpouseContactEditing(false);
  currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
  updateSolicitationAccordionStatuses();
});
spousePhone.addEventListener("input", formatPhoneInput);
editHolderAddress.addEventListener("click", () => setAddressEditing(true));
cancelHolderAddress.addEventListener("click", () => {
  setAddressEditing(false, true);
  updateSolicitationAccordionStatuses();
});
saveHolderAddress.addEventListener("click", () => {
  const fields = getAddressEditFields();
  if (!validateSolicitationEditFields(fields)) return;
  setAddressEditing(false);
  currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
  updateSolicitationAccordionStatuses();
});
editHolderEmployment.addEventListener("click", () => setEmploymentEditing(true));
cancelHolderEmployment.addEventListener("click", () => {
  setEmploymentEditing(false, true);
  syncEmploymentPositionLabel();
  updateSolicitationAccordionStatuses();
});
saveHolderEmployment.addEventListener("click", () => {
  if (!validateEmploymentEditFields()) return;
  setEmploymentEditing(false);
  currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
  updateSolicitationAccordionStatuses();
});
editVehicleData.addEventListener("click", () => setVehicleEditing(true));
cancelVehicleData.addEventListener("click", () => {
  setVehicleEditing(false, true);
  updateSolicitationAccordionStatuses();
});
saveVehicleData.addEventListener("click", () => {
  const fields = getVehicleEditFields();
  if (!validateSolicitationEditFields(fields)) return;
  setVehicleEditing(false);
  currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
  updateSolicitationAccordionStatuses();
});
employmentCategory.addEventListener("change", syncEmploymentPositionLabel);
vehicleOwnership.addEventListener("change", () => {
  syncThirdPartyOwnershipFields();
  updateSolicitationAccordionStatuses();
});
[holderPhone, holderEmail, holderCivilStatus, holderBirthCountry, holderResidenceCountry,
  holderProfession, holderPropertyType, holderAddressYears, holderAddressMonths,
  holderDepartment, holderProvince, holderDistrict, holderAddress, holderAddressReference,
  employmentCategory, employerRuc, workplaceName, workplaceAddress, employmentActivity,
  employmentPosition, employmentStartDate, employmentCurrency, monthlyNetIncome,
  spouseCivilStatus, spouseBirthCountry, spouseResidenceCountry, spouseProfession,
  spousePhone, spouseEmail,
  vehicleSellerDocumentType, vehicleSellerDocument, vehicleSellerName, solicitationVehicleBrand,
  solicitationVehicleModel, solicitationVehicleYear, vehicleOwnership, vehicleThirdPartyNames,
  vehicleThirdPartyPaternalSurname, vehicleThirdPartyMaternalSurname, vehicleColor, vehicleType,
  vehicleVin, vehicleEngineNumber]
  .forEach((field) => {
    field.addEventListener("input", updateSolicitationAccordionStatuses);
    field.addEventListener("change", updateSolicitationAccordionStatuses);
  });
[holderPropertyType, holderAddressYears, holderAddressMonths, holderDepartment,
  holderProvince, holderDistrict, holderAddress, holderAddressReference]
  .forEach((field) => {
    field.addEventListener("input", invalidateAddressValidation);
    field.addEventListener("change", invalidateAddressValidation);
  });
validateAddressButton.addEventListener("click", openAddressMapModal);
closeAddressMapModalButton.addEventListener("click", closeAddressMapModal);
cancelAddressValidation.addEventListener("click", closeAddressMapModal);
confirmAddressValidation.addEventListener("click", confirmHolderAddress);
acceptAddressValidation.addEventListener("click", closeAddressValidationSuccess);
vehicleSellerDocument.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\D/g, "").slice(0, 8);
  updateSolicitationAccordionStatuses();
});
generateGuaranteeButton.addEventListener("click", () => {
  if (generateGuaranteeButton.disabled || !currentGeneratedRequest) return;
  currentGeneratedRequest.guaranteeGenerated = true;
  currentGeneratedRequest.solicitationDetails = captureSolicitationDetails();
  generateGuaranteeButton.textContent = "Garantía generada";
  generateGuaranteeButton.disabled = true;
  renderPostApprovalDocuments();
});
postApprovalDocumentList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-download-post-approval]");
  if (!button || button.disabled) return;
  markPostApprovalDocumentDownloaded(button.dataset.downloadPostApproval);
  renderPostApprovalDocuments();
});
downloadAllPostApproval.addEventListener("click", () => {
  postApprovalDocumentNames.forEach((name) => {
    if (name !== "Contrato de garantía" || currentGeneratedRequest.guaranteeGenerated) {
      markPostApprovalDocumentDownloaded(name);
    }
  });
  renderPostApprovalDocuments();
});
checklistTwoItems.addEventListener("change", (event) => {
  const input = event.target.closest("[data-checklist-input-key]");
  if (!input) return;
  const key = input.dataset.checklistInputKey;
  const requirement = checklistTwoRequirements.find((item) => item.key === key);
  const maxFiles = requirement?.maxFiles || 2;
  currentGeneratedRequest.checklistTwoFiles ||= {};
  const existing = currentGeneratedRequest.checklistTwoFiles[key] || [];
  const selected = Array.from(input.files);
  const invalid = selected.some((file) => file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf"));
  if (invalid) {
    checklistTwoError.textContent = "Solo se permiten documentos en formato PDF.";
    input.value = "";
    return;
  }
  if (existing.length + selected.length > maxFiles) {
    checklistTwoError.textContent = `El ítem ${requirement?.name || "seleccionado"} permite como máximo ${maxFiles} archivos PDF.`;
    input.value = "";
    return;
  }
  currentGeneratedRequest.checklistTwoFiles[key] = [...existing, ...selected.map((file) => file.name)];
  input.value = "";
  renderChecklistTwo();
});
checklistTwoItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-checklist-key]");
  if (!button || isEFE004OperationsPending()) return;
  const files = currentGeneratedRequest.checklistTwoFiles?.[button.dataset.removeChecklistKey] || [];
  files.splice(Number(button.dataset.removeChecklistIndex), 1);
  renderChecklistTwo();
});
employerRuc.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\D/g, "").slice(0, 11);
  updateSolicitationAccordionStatuses();
});
monthlyNetIncome.addEventListener("input", sanitizeTwoDecimalInput);
monthlyNetIncome.addEventListener("focus", unformatMonthlyNetIncome);
monthlyNetIncome.addEventListener("blur", formatMonthlyNetIncome);
monthlyNetIncome.addEventListener("keydown", blurOnEnter);
calculationView.addEventListener("input", handleFinancingDataChange);
calculationView.addEventListener("change", handleFinancingDataChange);
calculationPhone.addEventListener("input", formatPhoneInput);
vehicleInsuranceType.addEventListener("change", syncVehicleInsuranceFields);
annualVehicleInsurancePercentage.addEventListener("input", sanitizeTwoDecimalInput);
annualVehicleInsurancePercentage.addEventListener("input", updateCalculateAvailability);
annualVehicleInsurancePercentage.addEventListener("focus", unformatAnnualVehicleInsurance);
annualVehicleInsurancePercentage.addEventListener("blur", formatAnnualVehicleInsurance);
annualVehicleInsurancePercentage.addEventListener("keydown", blurOnEnter);
creditLifeInsurance.addEventListener("change", syncCreditLifeInsuranceFields);
gpsOption.addEventListener("change", syncGpsFields);
doubleInstallments.addEventListener("change", syncDoubleInstallmentFields);
declaredIncome.addEventListener("click", () => toggleIncomePanel());
declaredIncome.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleIncomePanel();
  }
});
incomeChevron.addEventListener("click", () => toggleIncomePanel());
closeIncomePanel.addEventListener("click", () => toggleIncomePanel(false));
cancelIncomeChanges.addEventListener("click", cancelIncomeDraft);
saveIncomeChanges.addEventListener("click", saveIncomeDraft);
addHolderIncome.addEventListener("click", () => addIncome("holder"));
addSpouseIncome.addEventListener("click", () => addIncome("spouse"));
holderIncomeRows.addEventListener("input", handleIncomeField);
holderIncomeRows.addEventListener("change", handleIncomeField);
holderIncomeRows.addEventListener("click", handleIncomeClick);
holderIncomeRows.addEventListener("focusout", formatIncomeAmount);
spouseIncomeRows.addEventListener("input", handleIncomeField);
spouseIncomeRows.addEventListener("change", handleIncomeField);
spouseIncomeRows.addEventListener("click", handleIncomeClick);
spouseIncomeRows.addEventListener("focusout", formatIncomeAmount);
jointIncome.addEventListener("change", syncJointIncomeFields);
document.addEventListener("pointerdown", (event) => {
  if (incomeChangesPending && !incomeDetailPanel.contains(event.target)) showUnsavedIncomeWarning();
});
closeSuccessModalButton.addEventListener("click", closeSuccessModal);
acceptSuccessButton.addEventListener("click", closeSuccessModal);
civilStatus.addEventListener("change", handleCivilStatusChange);
validatedSimulationFields.forEach((field) => {
  field.addEventListener("input", clearFieldValidation);
  field.addEventListener("change", clearFieldValidation);
});
manualPersonFields.forEach((field) => {
  field.addEventListener("input", clearFieldValidation);
  field.addEventListener("change", clearFieldValidation);
});
simulationForm.addEventListener("reset", () => {
  window.requestAnimationFrame(() => {
    resolvedDocument = "";
    spouseCard.hidden = true;
    resetSpouseContent();
    resetManualPersonForm();
    simulationMessage.textContent = "";
    simulationMessage.classList.remove("is-error");
    validatedSimulationFields.forEach((field) => {
      field.classList.remove("has-error");
      field.setAttribute("aria-invalid", "false");
    });
  });
});

spouseDocument.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    filterSpouse();
  }
});

spouseModal.addEventListener("click", (event) => {
  if (event.target === spouseModal) closeSpouseModal();
});

successModal.addEventListener("click", (event) => {
  if (event.target === successModal) closeSuccessModal();
});

addressMapModal.addEventListener("click", (event) => {
  if (event.target === addressMapModal) closeAddressMapModal();
});

addressValidationSuccessModal.addEventListener("click", (event) => {
  if (event.target === addressValidationSuccessModal) closeAddressValidationSuccess();
});

plaftDeniedModal.addEventListener("click", (event) => {
  if (event.target === plaftDeniedModal) closePlaftModal();
});

incompleteSolicitationModal.addEventListener("click", (event) => {
  if (event.target === incompleteSolicitationModal) closeIncompleteSolicitationPopup();
});

phoneOtpModal.addEventListener("click", (event) => {
  if (event.target === phoneOtpModal) closePhoneOtp();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !spouseModal.hidden) closeSpouseModal();
  if (event.key === "Escape" && !successModal.hidden) closeSuccessModal();
  if (event.key === "Escape" && !addressMapModal.hidden) closeAddressMapModal();
  if (event.key === "Escape" && !addressValidationSuccessModal.hidden) closeAddressValidationSuccess();
  if (event.key === "Escape" && !plaftDeniedModal.hidden) closePlaftModal();
  if (event.key === "Escape" && !incompleteSolicitationModal.hidden) closeIncompleteSolicitationPopup();
  if (event.key === "Escape" && !phoneOtpModal.hidden) closePhoneOtp();
});

function initializeEFE004Workflow() {
  const requestItem = requests.find((request) => request.request === "EFE004");
  if (!requestItem) return;
  const dateData = {
    year: 2026,
    date: "2026-05-22",
    time: "15:30:00",
    display: "22-05-2026 15:30:00",
  };
  const person = {
    names: "Juan",
    paternalSurname: "Pérez",
    maternalSurname: "García",
    civilStatus: "SOLTERO",
    birthDate: "1987-08-12",
  };
  const controls = [
    ["exchangeRate", "3.78"],
    ["initialPayment", "$ 5,000.00"],
    ["selectedTerm", "36 meses"],
    ["vehicleInsuranceType", "con_seguro"],
    ["annualVehicleInsurancePercentage", "2.50 %"],
    ["creditLifeInsurance", "con_seguro"],
    ["creditLifeInsuranceType", "Individual"],
    ["gpsOption", "con_gps"],
    ["gpsType", "Premium"],
    ["registrationExpenses", "Si"],
    ["notarialExpenses", "Si"],
    ["signatureExpenses", "Si"],
    ["shippingExpenses", "No"],
    ["doubleInstallments", "No"],
    ["doubleInstallmentMonths", "Agosto / Enero"],
    ["estimatedIncome", "S/ 5,850.00"],
    ["declaredIncome", "S/ 5,850.00"],
    ["calculationPhone", "987654321"],
    ["amountToFinance", "S/ 20,650.00"],
    ["paymentDay", "15"],
  ].map(([id, value]) => ({ key: `id:${id}`, value }));
  controls.push({ key: "id:pilotConditions", value: "on", checked: true });

  requestItem.workflow = {
    requestNumber: "EFE004",
    dateData,
    document: "71865987",
    vehiclePrice: "$ 25,000.00",
    phone: "987654321",
    dealer: "Hyundai",
    branch: "San Miguel",
    hasSpouse: false,
    spouseDocument: "",
    spousePerson: null,
    person: { ...person },
    simulationPerson: { ...person },
    lastScreen: "solicitation",
    calculationUnlocked: true,
    controls,
    holderIncomes: [{
      category: "5ta categoría",
      profile: "Formal",
      situation: "Dependiente",
      startDate: "2020-03-02",
      ruc: "20123456789",
      monthlyIncome: "5850.00",
      annualized: "No",
    }],
    spouseIncomes: [],
    holderPrimaryIncomeLoaded: true,
    spousePrimaryIncomeLoaded: false,
    holderPrimaryEditing: false,
    holderPrimaryBackup: null,
    incomePanelOpen: false,
    simulateVisible: true,
    calculationResultVisible: true,
    solicitationStarted: true,
    solicitationNavigationLocked: false,
    readOnlyWorkflow: true,
    stage: "DOCUMENTARIA",
    status: "PENDIENTE",
    addressValidated: true,
    solicitationDetails: {
      civilStatus: "SOLTERO",
      birthCountry: "Perú",
      residenceCountry: "Perú",
      profession: "Administrador",
      phone: "987654321",
      email: "juan.perez@gmail.com",
      propertyType: "Propia",
      addressYears: "5",
      addressMonths: "2",
      department: "Lima",
      province: "Lima",
      district: "San Miguel",
      address: "Av. La Marina 2450",
      reference: "Frente al centro comercial",
      addressValidated: true,
      employmentCategory: "Dependiente",
      employerRuc: "20123456789",
      workplaceName: "Comercial Andina S.A.C.",
      workplaceAddress: "Av. República de Panamá 3055",
      employmentActivity: "Comercio",
      employmentPosition: "Empleado",
      employmentStartDate: "2020-03-02",
      employmentCurrency: "Soles (S/)",
      monthlyNetIncome: "S/ 5,850.00",
      spouseCivilStatus: "CASADO",
      spouseBirthCountry: "",
      spouseResidenceCountry: "",
      spouseProfession: "",
      spousePhone: "",
      spouseEmail: "",
      sellerDocumentType: "DNI",
      sellerDocument: "45678912",
      sellerName: "Carlos Mendoza Ruiz",
      vehicleBrand: "Hyundai",
      vehicleModel: "Accent",
      vehicleYear: "2026",
      vehicleOwnership: "Titular",
      vehicleThirdPartyNames: "",
      vehicleThirdPartyPaternalSurname: "",
      vehicleThirdPartyMaternalSurname: "",
      vehicleColor: "",
      vehicleType: "",
      vehicleVin: "",
      vehicleEngineNumber: "",
      guaranteeGenerated: false,
    },
    documentUploads: {
      "document-0": ["DNI_Titular_EFE004.pdf"],
      "document-1": ["Recibo_Servicios_EFE004.pdf"],
      "document-2": ["Cotizacion_Vehiculo_EFE004.pdf"],
    },
    comments: [{
      executive: currentExecutiveName,
      dateTime: "22-05-2026 15:25:00",
      comment: "Cliente validado y expediente completo. Se remite la documentación para continuar con la etapa documentaria.",
    }],
    riskComments: [{
      analyst: "María Fernanda Salazar",
      dateTime: "22-05-2026 16:40:00",
      decision: "Aprobado",
      comment: "La evaluación de riesgos fue aprobada. El cliente cumple con las políticas crediticias y puede continuar a la etapa documentaria.",
    }],
    downloadedPostApprovalDocuments: [],
    checklistTwoFiles: {},
  };
}

initializeEFE004Workflow();
renderRequests();
