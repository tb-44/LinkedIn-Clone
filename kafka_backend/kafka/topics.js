const SIGNIN_RECRUITER_REQUEST_TOPIC = "signinRecruiterRequest";
const SIGNIN_RECRUITER_RESPONSE_TOPIC = "signinRecruiterResponse";
const SIGNUP_RECRUITER_REQUEST_TOPIC = "signupRecruiterRequest";
const SIGNUP_RECRUITER_RESPONSE_TOPIC = "signupRecruiterResponse";

const ADD_RECRUITER_ROLE_REQUEST = "addRecruiterRoleRequest";
const ADD_RECRUITER_ROLE_RESPONSE = "addRecruiterRoleResponse";

const SIGNIN_APPLICANT_REQUEST_TOPIC = "signinApplicantRequest";
const SIGNIN_APPLICANT_RESPONSE_TOPIC = "signinApplicantResponse";
const SIGNUP_APPLICANT_REQUEST_TOPIC = "signupApplicantRequest";
const SIGNUP_APPLICANT_RESPONSE_TOPIC = "signupApplicantResponse";

const POST_JOB_REQUEST = "postJobRequest";
const POST_JOB_RESPONSE = "postJobResponse";

const GET_JOBS_BY_RECRUITER_RESPONSE = "getJobsByRecruiterResponse";
const GET_JOBS_BY_RECRUITER_REQUEST = "getJobsByRecruiterRequest";

const POST_RECRUITER_PROFILE_REQUEST = "postRecruiterProfileRequest";
const POST_RECRUITER_PROFILE_RESPONSE = "postRecruiterProfileResponse";

const GET_RECRUITER_PROFILE_REQUEST = "getRecruiterProfileRequest";
const GET_RECRUITER_PROFILE_RESPONSE = "getRecruiterProfileResponse";

const GET_APPLICANT_PROFILE_REQUEST = "getApplicantProfileRequest";
const GET_APPLICANT_PROFILE_RESPONSE = "getApplicantProfileResponse";

const POST_APPLICANT_PROFILE_SUMMARY_REQUEST =  "postApplicantProfileSummaryRequest";
const POST_APPLICANT_PROFILE_SUMMARY_RESPONSE = "postApplicantProfileSummaryResponse";

const EDIT_JOB_REQUEST = "editJobRequest";
const EDIT_JOB_RESPONSE = "editJobResponse";

const UPDATE_JOB_VIEWS_REQUEST = "updateJobViewsRequest";
const UPDATE_JOB_VIEWS_RESPONSE = "updateJobViewsResponse";

const GRAPHS_CLICK_PER_JOB_REQUEST = "graphClicksPerJobRequest";
const GRAPHS_CLICK_PER_JOB_RESPONSE = "graphClicksPerJobResponse";

const GRAPHS_TOP_JOB_POSTINGS_REQUEST = "graphTopJobPostingsRequest";
const GRAPHS_TOP_JOB_POSTINGS_RESPONSE = "graphTopJobPostingsResponse";

const UPDATE_JOB_CLICKS_REQUEST = "updateJobClicksRequest";
const UPDATE_JOB_CLICKS_RESPONSE = "updateJobClicksResponse";

const GRAPHS_UNPOPULAR_JOB_POSTINGS_REQUEST = "graphUnpopularJobPostingsRequest";
const GRAPHS_UNPOPULAR_JOB_POSTINGS_RESPONSE = "graphUnpopularJobPostingsResponse";

const GRAPHS_CITYWISE_APPLICATION_REQUEST = "graphCitywiseApplicationRequest";
const GRAPHS_CITYWISE_APPLICATION_RESPONSE = "graphCitywiseApplicationResponse";

const LOG_EVENT_REQUEST = "logEventRequest";
const LOG_EVENT_RESPONSE = "logEventResponse";

const GRAPHS_LOG_EVENT_REQUEST = "graphLogEventRequest";
const GRAPHS_LOG_EVENT_RESPONSE = "graphLogEventResponse";

const SEND_MESSAGE_REQUEST = "sendMessageRequest";
const SEND_MESSAGE_RESPONSE = "sendMessageResponse";
const GET_ALL_MESSAGES_REQUEST = "getAllMessagesRequest";
const GET_ALL_MESSAGES_RESPONSE = "getAllMessagesResponse"; 

module.exports = {
    SIGNIN_RECRUITER_REQUEST_TOPIC, SIGNIN_RECRUITER_RESPONSE_TOPIC,
    SIGNUP_RECRUITER_REQUEST_TOPIC, SIGNUP_RECRUITER_RESPONSE_TOPIC,
    ADD_RECRUITER_ROLE_REQUEST, ADD_RECRUITER_ROLE_RESPONSE,
    SIGNIN_APPLICANT_REQUEST_TOPIC, SIGNIN_APPLICANT_RESPONSE_TOPIC,
    SIGNUP_APPLICANT_REQUEST_TOPIC, SIGNUP_APPLICANT_RESPONSE_TOPIC,
    POST_JOB_REQUEST, POST_JOB_RESPONSE, 
    GET_JOBS_BY_RECRUITER_REQUEST, GET_JOBS_BY_RECRUITER_RESPONSE,
    POST_RECRUITER_PROFILE_REQUEST, POST_RECRUITER_PROFILE_RESPONSE,
    GET_RECRUITER_PROFILE_REQUEST, GET_RECRUITER_PROFILE_RESPONSE,
    GET_APPLICANT_PROFILE_REQUEST, GET_APPLICANT_PROFILE_RESPONSE,
    POST_APPLICANT_PROFILE_SUMMARY_REQUEST, POST_APPLICANT_PROFILE_SUMMARY_RESPONSE,
    SIGNUP_APPLICANT_REQUEST_TOPIC, SIGNUP_APPLICANT_RESPONSE_TOPIC,
    GET_RECRUITER_PROFILE_REQUEST, GET_RECRUITER_PROFILE_RESPONSE,
    EDIT_JOB_REQUEST, EDIT_JOB_RESPONSE,
    UPDATE_JOB_VIEWS_REQUEST, UPDATE_JOB_VIEWS_RESPONSE,
    GRAPHS_CLICK_PER_JOB_REQUEST, GRAPHS_CLICK_PER_JOB_RESPONSE,
    GRAPHS_TOP_JOB_POSTINGS_REQUEST, GRAPHS_TOP_JOB_POSTINGS_RESPONSE,
    UPDATE_JOB_CLICKS_REQUEST, UPDATE_JOB_CLICKS_RESPONSE,
    GRAPHS_UNPOPULAR_JOB_POSTINGS_REQUEST, GRAPHS_UNPOPULAR_JOB_POSTINGS_RESPONSE,
    GRAPHS_CITYWISE_APPLICATION_REQUEST, GRAPHS_CITYWISE_APPLICATION_RESPONSE,
    LOG_EVENT_REQUEST, LOG_EVENT_RESPONSE, GRAPHS_LOG_EVENT_REQUEST,
    GRAPHS_LOG_EVENT_RESPONSE,
    SEND_MESSAGE_REQUEST, SEND_MESSAGE_RESPONSE,
    GET_ALL_MESSAGES_REQUEST, GET_ALL_MESSAGES_RESPONSE
};