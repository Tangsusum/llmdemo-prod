import os
import sys
import logging
from dotenv import load_dotenv
import ddtrace
from langchain_openai import ChatOpenAI
from pythonjsonlogger import jsonlogger

# Load environment variables and set up Datadog
load_dotenv()
ddtrace.patch_all(logging=True)
ddtrace.config.logs_injection = True

# Reduce Datadog telemetry noise - suppress all internal DD logs
logging.getLogger('ddtrace').setLevel(logging.ERROR)
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
