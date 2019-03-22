import datetime

def format_js_iso(date : datetime) -> str:
    """Format a time to ISO string format for javascript"""
    return datetime.datetime.strftime(date, '%Y-%m-%dT%H:%M:%S.{0}Z').format(int(round(date.microsecond / 1000.0)))