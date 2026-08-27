import os
import sys
import logging
from dotenv import load_dotenv
import ddtrace
from ddtrace.llmobs import LLMObs
from langchain_openai import ChatOpenAI
from pythonjsonlogger import jsonlogger

# Load environment variables and set up Datadog
load_dotenv(override=True)
os.environ.setdefault("DD_AGENT_HOST", "127.0.0.1")
os.environ.setdefault("DD_TRACE_AGENT_PORT", "18126")

_agentless = os.getenv("DD_LLMOBS_AGENTLESS_ENABLED", "false").lower() == "true"

try:
    LLMObs.enable(
        ml_app=os.getenv("DD_LLMOBS_ML_APP", "hanoi-coffee-guardrail"),
        integrations_enabled=True,
        agentless_enabled=_agentless,
        site=os.getenv("DD_SITE", "datadoghq.com"),
        api_key=os.getenv("DD_API_KEY"),
        env=os.getenv("DD_ENV", "local"),
        service=os.getenv("DD_SERVICE", "hanoi-coffee-guardrail"),
    )
except Exception as exc:
    logging.getLogger("llm-demo").error("Failed to enable Datadog LLM Observability: %s", exc)

ddtrace.patch_all(logging=True)
ddtrace.config.logs_injection = True

# Reduce Datadog telemetry noise - keep LLMObs export errors visible
logging.getLogger('ddtrace').setLevel(logging.WARNING)
logging.getLogger('ddtrace.internal').setLevel(logging.CRITICAL)

langchain_client = ChatOpenAI(
    model="gpt-3.5-turbo",
    temperature=0.1,
    openai_api_key=os.getenv("OPENAI_API_KEY"),
    request_timeout=12,
    max_retries=1,
    max_tokens=150
)

LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO").upper()
fmt = (
    "%(asctime)s %(levelname)s %(name)s %(filename)s %(lineno)d "
    "%(message)s %(dd.service)s %(dd.env)s %(dd.trace_id)s %(dd.span_id)s"
)
handler = logging.StreamHandler(sys.stdout)
handler.setFormatter(jsonlogger.JsonFormatter(fmt))
root = logging.getLogger()
root.handlers = [handler]
root.setLevel(LOG_LEVEL)
log = logging.getLogger("llm-demo")
log.info(
    "Datadog LLM Observability enabled=%s agentless=%s site=%s ml_app=%s service=%s agent_host=%s",
    getattr(LLMObs, "enabled", False),
    os.getenv("DD_LLMOBS_AGENTLESS_ENABLED"),
    os.getenv("DD_SITE"),
    os.getenv("DD_LLMOBS_ML_APP"),
    os.getenv("DD_SERVICE"),
    os.getenv("DD_AGENT_HOST"),
)
