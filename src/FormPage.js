import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import './FormPage.css'; // Import CSS file
import logo from './Foundry-horz-inverse.png';

const FormPage = () => {
  const [formData, setFormData] = useState({
    suiteName: '',
    scenarioName: '',
    testcaseID: '',
    testcaseName: '',
    assertion: '',
    result: '',
    environment: '',
    setup: '',
    execution: '',
    verification: '',
    testcasePriority: '',
    testType: '',
    testStatus: '',
    testOwner: '',
    automatedManualState: '',
    remarks: '',
    otherState: ''
  });
  const [exportData, setExportData] = useState([]);
  const [addAnotherTest, setAddAnotherTest] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setAddAnotherTest(e.target.checked);
  };

  const handleExport = () => {
    const requiredFields = [
      formData.suiteName,
      formData.scenarioName,
      formData.testcaseID,
      formData.testcaseName,
      formData.assertion,
      formData.result,
      formData.environment,
      formData.setup,
      formData.execution,
      formData.verification,
      formData.testcasePriority,
      formData.testType,
      formData.testStatus,
      formData.testOwner,
      formData.automatedManualState,
      formData.remarks
    ];

    if (requiredFields.some(field => field === '')) {
      alert('Please fill in all required fields before exporting.');
      return;
    }

    const data = [
      {
        SuiteName: formData.suiteName,
        ScenarioName: formData.scenarioName,
        TestcaseID: formData.testcaseID,
        TestcaseName: formData.testcaseName,
        Assertion: formData.assertion,
        Result: formData.result,
        Environment: formData.environment,
        Setup: formData.setup,
        Execution: formData.execution,
        Verification: formData.verification,
        TestcasePriority: formData.testcasePriority,
        TestType: formData.testType,
        TestStatus: formData.testStatus,
        TestOwner: formData.testOwner,
        AutomatedManualState: formData.automatedManualState,
        Remarks: formData.remarks,
        OtherState: formData.otherState
      }
    ];
    setExportData(data);
  };

  const handleAddTest = () => {
    console.log('Add another test');
    setFormData({
      suiteName: '',
      scenarioName: '',
      testcaseID: '',
      testcaseName: '',
      assertion: '',
      result: '',
      environment: '',
      setup: '',
      execution: '',
      verification: '',
      testcasePriority: '',
      testType: '',
      testStatus: '',
      testOwner: '',
      automatedManualState: '',
      remarks: '',
      otherState: ''
    });
    setAddAnotherTest(false);
  };

  const handleCancel = () => {
    setAddAnotherTest(false);
  };

  const handleClear = () => {
    setFormData({
      suiteName: '',
      scenarioName: '',
      testcaseID: '',
      testcaseName: '',
      assertion: '',
      result: '',
      environment: '',
      setup: '',
      execution: '',
      verification: '',
      testcasePriority: '',
      testType: '',
      testStatus: '',
      testOwner: '',
      automatedManualState: '',
      remarks: '',
      otherState: ''
    });
  };

  return (
    <div className="form-container">
      <div className="header">

        <img src={logo} alt="Logo" className="logo" />
        <h2 className="form-heading">Form Page</h2>
      </div>
      <div>
        <div className="form-group">
          <label htmlFor="suiteName">Suite Name:</label>
          <select
            id="suiteName"
            name="suiteName"
            value={formData.suiteName}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a Suite</option>
            <option value="suite1">Suite 1</option>
            <option value="suite2">Suite 2</option>
            <option value="suite3">Suite 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="scenarioName">Scenario Name:</label>
          <select
            id="scenarioName"
            name="scenarioName"
            value={formData.scenarioName}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a Scenario</option>
            <option value="scenario1">Scenario 1</option>
            <option value="scenario2">Scenario 2</option>
            <option value="scenario3">Scenario 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="testcaseID">Testcase ID:</label>
          <input
            type="text"
            id="testcaseID"
            name="testcaseID"
            value={formData.testcaseID}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="testcaseName">Testcase Name:</label>
          <input
            type="text"
            id="testcaseName"
            name="testcaseName"
            value={formData.testcaseName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="assertion">Assertion:</label>
          <input
            type="text"
            id="assertion"
            name="assertion"
            value={formData.assertion}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="result">Result:</label>
          <input
            type="text"
            id="result"
            name="result"
            value={formData.result}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="environment">Environment:</label>
          <input
            type="text"
            id="environment"
            name="environment"
            value={formData.environment}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="setup">Setup:</label>
          <input
            type="text"
            id="setup"
            name="setup"
            value={formData.setup}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="execution">Execution:</label>
          <input
            type="text"
            id="execution"
            name="execution"
            value={formData.execution}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="verification">Verification:</label>
          <input
            type="text"
            id="verification"
            name="verification"
            value={formData.verification}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="testcasePriority">Testcase Priority:</label>
          <input
            type="text"
            id="testcasePriority"
            name="testcasePriority"
            value={formData.testcasePriority}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="testType">Test Type:</label>
          <input
            type="text"
            id="testType"
            name="testType"
            value={formData.testType}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="testStatus">Test Status:</label>
          <input
            type="text"
            id="testStatus"
            name="testStatus"
            value={formData.testStatus}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="testOwner">Test Owner:</label>
          <input
            type="text"
            id="testOwner"
            name="testOwner"
            value={formData.testOwner}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="automatedManualState">Automated Manual State:</label>
          <select
            id="automatedManualState"
            name="automatedManualState"
            value={formData.automatedManualState}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select State</option>
            <option value="Manual - No automation Plan">1: Manual - No automation Plan</option>
            <option value="Manual - Automation Planned">2: Manual - Automation Planned</option>
            <option value="Automation In Progress">3: Automation In Progress</option>
            <option value="Automated and Executed">4: Automated and Executed</option>
            <option value="Others">5: Others - (Must contain an input field)</option>
          </select>
          {formData.automatedManualState === 'Others' && (
            <input
              type="text"
              id="otherState"
              name="otherState"
              placeholder="Specify other state"
              value={formData.otherState}
              onChange={handleChange}
              style={{ marginTop: '10px' }}
            />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="remarks">Remarks:</label>
          <textarea
            type="text"
            id="remarks"
            name="remarks"
            rows="7"  // Adjust the number of visible rows
            cols="40" 
            value={formData.remarks}
            onChange={handleChange}
            className="form-input-remarks"
          />
        </div>
        <button onClick={handleClear} className="btn-clear">Clear</button>
      </div>
      <label>
          <input
            type="checkbox"
            checked={addAnotherTest}
            onChange={handleCheckboxChange}
          />
          Add Another Test
        </label>
        {addAnotherTest && (
          <div className="add-test-actions">
            <button onClick={handleAddTest} className="btn-add-test">Add Test</button>
            <button onClick={handleCancel} className="btn-cancel">Cancel</button>
          </div>
        )}
        
      <div className="form-group">
      <label className='Blabel'>Browser to test:</label>
          <div className="browser-links">
            <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">Chrome</a>
            {' | '}
            <a href="https://www.mozilla.org/firefox/" target="_blank" rel="noopener noreferrer">Firefox</a>
            {' | '}
            <a href="https://www.apple.com/safari/" target="_blank" rel="noopener noreferrer">Safari</a>
            {' | '}
            <a href="https://brave.com/" target="_blank" rel="noopener noreferrer">Brave</a>
          </div>
       </div>

      <div className="form-actions">
        <CSVLink
          data={exportData}
          filename="form_data.csv"
          className="btn-export"
          onClick={handleExport}
        >
          Export Excel
        </CSVLink>
      
      </div>
    </div>
  );
};

export default FormPage;
