package gov.nih.nci.cananolab.exception;

public class SynthesisException extends BaseException  {

    public SynthesisException(String err, Throwable e) {
            super(err, e);
    }

    public SynthesisException(String err){super(err);}
}
